import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap } from "rxjs/operators";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";


@Injectable({providedIn:'root'})
export class AuthService {

    user = new BehaviorSubject<User>(null);
    private duration: any;

    constructor(private httpClient: HttpClient, private router: Router){

    }

    signup(email: string, password: string) {

        return this.httpClient.post<AuthResponseData>
        ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA81m01Iy3A8fyPraZpUKph11pX5YnBzkE',
        {
            email: email, 
            password: password, 
            returnSecureToken:true
        })
        .pipe(tap(response => {
            this.handleAuth(response.email, response.localId, response.idToken, +response.expiresIn);
        }),catchError(this.handleError));
    }


    login(email: string, password: string) {
        return this.httpClient.post<AuthResponseData>
        ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA81m01Iy3A8fyPraZpUKph11pX5YnBzkE',
        {
            email: email, 
            password: password, 
            returnSecureToken:true
        })
        .pipe(tap(response => {
            this.handleAuth(response.email, response.localId, response.idToken, +response.expiresIn);
        }),catchError(this.handleError));  
    }

    autoLogin() {
        const userdata : {
            email: string,
            id: string,
            _token: string, 
            tokenExpireDate: string
        } = JSON.parse(localStorage.getItem('userdata'));
        if( !userdata )
            return false

        const loadeduser = new User(userdata.email, userdata.id, userdata._token, new Date(userdata.tokenExpireDate));

        if( loadeduser.token )
            this.user.next(loadeduser);
    }

    autoLogout(duration: number) {
       this.duration = setTimeout(() => {
            this.logout();
        }, duration);
    }

    logout() { 
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.clear();
        if( this.duration )
            clearTimeout(this.duration);
           
        this.duration = null;    
    }

    private handleAuth(email: string,id: string,token: string, tokenExpireDate: number) {
        const date = new Date( new Date().getTime() + tokenExpireDate*1000);
        const user = new User(email, id, token, date);
        this.user.next(user);
        this.autoLogout(tokenExpireDate*1000);
        localStorage.setItem('userdata', JSON.stringify(user));
    }

    private handleError(httpErrorResponse:HttpErrorResponse) {
        let error = null;
            
        if( !httpErrorResponse.error || !httpErrorResponse.error.error ){
            return throwError('upss');
        }
        switch(httpErrorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
              error = 'The email address is already in use by another account.';
              break;
            case 'OPERATION_NOT_ALLOWED':
              error = 'Password sign-in is disabled for this project.';
              break;  
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
              error = 'We have blocked all requests from this device due to unusual activity. Try again later.';
              break;
            case 'EMAIL_NOT_FOUND':
                error = 'There is no user record corresponding to this identifier. The user may have been deleted.';
                break;
            case 'INVALID_PASSWORD':
                error = 'The password is invalid or the user does not have a password.';
                break;
            case 'USER_DISABLED':
                error = 'The user account has been disabled by an administrator.';
                break;    
            default:
                error = ''  
        }
        return throwError(error);
    }
}


export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}