import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSocialComponent } from './navbar-social.component';
import { LandingPageService } from '../../services/landing-page.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { SocialNetWork } from './social-network';

describe('NavbarSocialComponent', () => {
  let component: NavbarSocialComponent;
  let fixture: ComponentFixture<NavbarSocialComponent>;
  let service: LandingPageService;
  let mockResponse: SocialNetWork[] = [
    {
      "clase": "fab fa-facebook-f",
      "estado": true,
      "nombre": "Facebook",
      "url": "fb.com"
    },
    {
      "clase": "fab fa-twitter",
      "estado": true,
      "nombre": "Twitter",
      "url": "twitter.com"
    },
    {
      "clase": "fab fa-youtube",
      "estado": true,
      "nombre": "Youtube",
      "url": "youtube.com"
    },
    {
      "clase": "fab fa-instagram",
      "estado": true,
      "nombre": "Instagram",
      "url": "instagram.com"
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        NavbarSocialComponent
      ],
      providers: [
        LandingPageService,
        NavbarSocialComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSocialComponent);
    component = fixture.componentInstance;
    service = component.landingPageService;
    fixture.detectChanges();
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe inyectar el LandingPageService', () => {
    expect(service).toBeTruthy();
  });

  it('Debe llenar la variable socialNetworks al llamar getSocialNetworks() del servicio inyectado', () => {
    spyOn(service, 'getSocialNetworks').and.returnValue(of(mockResponse));
    component.ngOnInit();
    expect(component.socialNetworks).toEqual(mockResponse);
  });

  it('Debe llamar a getSocialNetworks() en el ngOnInit()', () => {
    spyOn(component, 'getSocialNetworks').and.callThrough();
    component.ngOnInit();
    expect(component.getSocialNetworks).toHaveBeenCalled();
  });
});
