import { Component, OnInit } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { Router, NavigationEnd } from '@angular/router';
import { authConfig } from './auth.config';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
    constructor(
        private router: Router,
        private oauthService: OAuthService) {
        this.configureWithNewConfigApi();
        console.log('configure with new config Api');
    }

    private async configureWithNewConfigApi() {
        this.oauthService.configure(authConfig);
        this.oauthService.setStorage(localStorage);
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();

        await this.oauthService.loadDiscoveryDocumentAndTryLogin();
        if (this.oauthService.hasValidIdToken() || this.oauthService.hasValidAccessToken()) {
            console.log('go to dashboard');
            this.router.navigate(['/dashboard']);
        }
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
        });
    }
}

