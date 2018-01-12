import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders : [MatIconRegistry]
})
export class AppComponent {
  title = 'app';

  constructor(http: Http, sanitizer: DomSanitizer,  registry: MatIconRegistry) {
    registry.addSvgIcon
    ('motor', sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/motor.svg'))
    .addSvgIcon('accessories', sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/accessories.svg'))
    .addSvgIcon('spareparts', sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/spareparts.svg'))
    .addSvgIcon('login', sanitizer.bypassSecurityTrustResourceUrl('../assets/svg/login.svg'));
  }
}
