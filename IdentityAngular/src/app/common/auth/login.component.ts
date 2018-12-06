import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  template: `
    <div class="app-body">
        <main class="main d-flex align-items-center">
            <div class="container">
            <div class="row">
                <div class="col-md-8 mx-auto">
                <div class="card-group">
                    <div class="card p-4">
                    <div class="card-body">
                        <h1>Login</h1>
                        <p class="text-muted">Sign In to your account</p>
                        <div class="row">
                        <div class="col-6">
                            <button type="button" class="btn btn-primary px-4" (click)="login()">Login</button>
                        </div>
                        <div class="col-6 text-right">
                            <button type="button" class="btn btn-link px-0">Forgot password?</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="card text-white bg-primary py-5 d-md-down-none" style="width:44%">
                    <div class="card-body text-center">
                        <div>
                        <h2>Sign up</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt dolore magna aliqua.</p>
                        <button type="button" class="btn btn-primary active mt-3">Register Now!</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>
    </div>
  `
})
export class LoginComponent implements OnInit {

    constructor(private oauthService: OAuthService) { }

    ngOnInit() {
    }

    public login() {
        this.oauthService.initImplicitFlow('login');
    }


}
