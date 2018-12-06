import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private oauthService: OAuthService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // const token = sessionStorage.getItem('access_token');
        const token = localStorage.getItem('access_token');
        const duplicate = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            }
        });
        return next.handle(duplicate);
    }
}
