import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private oauthService: OAuthService) { }

  ngOnInit() {
  }

    public logout() {
        this.oauthService.logOut();
    }


}
