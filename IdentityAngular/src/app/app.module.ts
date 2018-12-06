import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './common/auth/login.component';
import { LoginCallbackComponent } from './common/auth/login-callback.component';
import { UnauthorizedComponent } from './common/auth/unauthorized.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HomeComponent } from './modules/home/home.component';
import { AuthInterceptor } from './common/interceptors/Auth.Interceptor';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        OAuthModule.forRoot(),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        LoginComponent,
        LoginCallbackComponent,
        UnauthorizedComponent,
        HomeComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
