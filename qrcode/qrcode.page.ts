import { Component, OnInit } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";
import { NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { BarcodeScannerOptions, BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { HttpClient } from '@angular/common/http';

import { ServiceService } from "../../service.service";

@Component({
  selector: "app-qrcode",
  templateUrl: "./qrcode.page.html",
  styleUrls: ["./qrcode.page.scss"],
})
export class QrcodePage implements OnInit {

  user = {
    Stu_id: String,
    Stu_name: String,
    Stu_password: String,
    Stu_img: String,
    Group_id: String,
    Parent_id: String,
    Activity_status: String,
  };
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(
    private barcodeScanner: BarcodeScanner,
    public service: ServiceService,
    private NavController: NavController,
    private storage: Storage,
    public http: HttpClient,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  ngOnInit() {
    this.storage.get("usdata").then((user) => {
      console.log("user", user)
      if (user) {
        this.user = user;
      }
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  async _alert(msg) {
    const alert = await this.alertController.create({
      header: 'Debug',
      subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  _scanQr() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        if (!barcodeData.cancelled && barcodeData.text !== "" && barcodeData.format === "QR_CODE") {
          // this._alert("_scanQr data [teacherID] " + JSON.stringify(barcodeData));
          this.presentLoading(); 
          this._checkScanId(barcodeData.text);
        }
      })
      .catch(err => {
        // this._alert("_scanQr data[err] " + JSON.stringify(err));
        this.service.alert("error", "Error", "ไม่สามารถเช็คชื่อได้โปรดลองใหม่!");
        console.log("Error", err);
      });
  }

  _checkScanId(gid) {
    try {
      this.http.post("https://seniorproject.ict.sci.psu.ac.th/students/it/std-61/468504/ionic/scanQrcode.php", JSON.stringify({ gid: gid, stuid: this.user.Stu_id, stu_group: this.user.Group_id })).subscribe(
        (data) => {
          if (data["status"]) {
            this.service.alert("success", "Success", data["message"]);
          } else {
            this.service.alert("error", "Error", data["message"]);
          }
          // this._alert("_checkScanId data " + JSON.stringify(data));   
        })
    } catch (error) {
      this.service.alert("error", "Error", "ไม่สามารถเช็คชื่อได้โปรดลองใหม่!");
    }

  }

  check_result() {
    this.NavController.navigateForward(["check-result"]);
  }
  
  register() {
    this.NavController.navigateForward(["register-activity"]);
  }

  logout() {
    this.storage.clear().then(() => {
      this.service.alert("success", "Success", "ออกจากระบบสำเร็จ!");
      this.NavController.navigateForward(["login"]);
    });
  }
}
