import { NgModule, ErrorHandler } from '@angular/core';
import { IonicModule, IonicErrorHandler } from 'ionic-angular';
import {ResultPage} from "./pages/result/result";
import {ScanPage} from "./pages/scan/scan";
import {HomePage} from "./pages/home/home";
import {ScannerComponent} from "./scanner";

@NgModule({
  declarations: [
    HomePage,
    ResultPage,
    ScanPage,
    ScannerComponent
  ],
  imports: [
    IonicModule.forRoot(HomePage),
    IonicModule.forRoot(ScanPage),
    IonicModule.forRoot(ResultPage)
  ],
  entryComponents: [
    HomePage,
    ResultPage,
    ScanPage,
    ScannerComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class ScannerModule {}
