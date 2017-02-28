import {Component, ViewChild} from '@angular/core';
import {Platform, MenuController, Nav} from "ionic-angular";
import {HomePage} from "./pages/home/home";
import {ScanPage} from "./pages/scan/scan";
import {StatusBar, Splashscreen} from "ionic-native";

/*
  Generated class for the Scanner component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'scanner',
  templateUrl: 'scanner.html'
})
export class ScannerComponent {

  @ViewChild(Nav) nav:Nav;
  rootPage:any = HomePage;
  pages:Array<{title:string, component:any}>;

  constructor(public platform:Platform, public mCtrl:MenuController) {
    console.log('Hello Scanner Component')
    this.initApp();
    this.pages = [
      {title:'Home', component:HomePage},
      {title:'Scan', component:ScanPage}
    ]
  }

  initApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  openPage(p){
    this.mCtrl.close();
    this.nav.setRoot(p.component);
  }
}
