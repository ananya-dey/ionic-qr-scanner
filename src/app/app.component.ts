import {Component, ViewChild} from '@angular/core';
import {Platform, Nav} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {ScannerComponent} from "./scanner/scanner";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav;
  rootPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      this.openUrl();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openUrl(){
    this.nav.setRoot(ScannerComponent);
  }
}
