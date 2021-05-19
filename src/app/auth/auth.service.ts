import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({providedIn:'root'})
export class AuthService {

    constructor(private httpClient: HttpClient){

    }

    signup(email: string, password: string) {
        return this.httpClient.post<AuthResponseData>
        ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA81m01Iy3A8fyPraZpUKph11pX5YnBzkE',
        {
            email: email, 
            password: password, 
            returnSecureToken:true
        });
    }
}


interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}