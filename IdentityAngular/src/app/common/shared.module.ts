import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login.component';
import { LoginCallbackComponent } from './auth/login-callback.component';
import { UnauthorizedComponent } from './auth/unauthorized.component';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
