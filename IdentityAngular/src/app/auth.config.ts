import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    issuer: 'http://localhost:5000',
    redirectUri: window.location.origin + '/login-callback',
    postLogoutRedirectUri: window.location.origin, // 'http://localhost:4200/',
    // silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
    clientId: 'angularoidc',
    scope: 'openid profile email webapi.read webapi.write',
    showDebugInformation: true,
    sessionChecksEnabled: true,
    oidc: true
};
