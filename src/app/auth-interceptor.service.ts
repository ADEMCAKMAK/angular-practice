import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


export class AuthInterceptorService implements HttpInterceptor {


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        console.log('request is on the way.');

        const modified = req.clone({ headers: req.headers.append('auth', 'xyz') });

        return next.handle(modified).pipe(tap(event => {

            if ( event.type === HttpEventType.Response ) {
                 console.log('response arrived');   
            }
        }));
    }

}