import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ToastController } from "@ionic/angular";
import { Storage } from "@ionic/storage";

import { ServiceService } from "../service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;
  usdata: any;

  constructor(
    public service: ServiceService,
    public http: HttpClient,
    private router: Router,
    public toastController: ToastController,
    private storage: Storage
  ) { }

  ngOnInit() { }

  async on_click_login() {
    this.service.isLoading(true)
    let url =
      "https://seniorproject.ict.sci.psu.ac.th/students/it/std-61/468504/ionic/login.php";
    let body = {
      user: this.username,
      pass: this.password,
    };
    this.http.post(url, JSON.stringify(body)).subscribe(
      (data) => {
        this.usdata = data;
        console.log(this.usdata);
        if (this.usdata.status === "true") {

          this.storage.set("loginStatus", true).then(() => {
            this.storage.set("level", this.usdata.level).then(() => {
              this.storage.set("usdata", this.usdata.user).then(() => {
                this.service.isLoading(false)
               this.service.alert("success", "Success", "เข้าสู่ระบบสำเร็จ!");
                if (this.usdata.level == "student") {
                  this.router.navigate(["student"]);
                } else if (this.usdata.level == "teacher") {
                  this.router.navigate(["folder"]);
                }
              });
            });
          });

        } else if (this.usdata.status === "false") {
          this.service.isLoading(false)
          this.service.alert("error", "Error", "เข้าสู่ระบบไม่สำเร็จ!");
          this.router.navigate(["login"]);
        }
      },
      (error) => {
        this.service.isLoading(false)
        console.error();
        this.service.alert("error", "Error", "เข้าสู่ระบบไม่สำเร็จ!");
        this.router.navigate(["login"]);
      }
    );
  }
  
}
