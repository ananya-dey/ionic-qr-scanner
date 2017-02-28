import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BarcodeScanner} from "ionic-native";
import {ResultPage} from "../result/result";

/*
  Generated class for the Scan page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {
  public scanText: string;
  public btnText: string;
  public loading: boolean;
  public listId: number;
  public listTitle: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('Scan Page');
    //this.listId = this.navParams.get('listId');
    //this.listTitle = this.navParams.get('listTitle');

    this.btnText = "Scan";
    this.loading = false;
  }

  public QRScan(){
    this.btnText = "Loading...";
    this.loading = true;

    BarcodeScanner.scan().then((barcodeDara)=>{
      if(barcodeDara.cancelled){
        console.log("USer cancelled the action");
        this.btnText = "Scan";
        this.loading = false;
        return false;
      }
      console.log("WOW!! Successfully Scanned");
      console.log(barcodeDara);
      this.goToResult(barcodeDara);
    },
      (err)=>{
        console.log(err);
      });
  }

  public goToResult(barcodeData){
    this.navCtrl.push(ResultPage, {
      scanText:barcodeData.text
    });
  }

}
