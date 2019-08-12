import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../../services/landing-page.service';
import { SocialNetWork } from './social-network';

@Component({
  selector: 'app-navbar-social',
  templateUrl: './navbar-social.component.html',
  styleUrls: ['./navbar-social.component.css']
})
export class NavbarSocialComponent implements OnInit {

  socialNetworks: SocialNetWork[] = [];
  constructor(public landingPageService: LandingPageService) { }

  ngOnInit() {
    this.getSocialNetworks();
  }

  getSocialNetworks(){
    this.landingPageService.getSocialNetworks().subscribe((redes)=> {
      this.socialNetworks = redes;  
    });
  }

}
