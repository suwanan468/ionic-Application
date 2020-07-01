import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";

import { ServiceService } from "../../service.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  user = {
    Stu_id: String,
    Stu_name: String,
    Stu_password: String,
    Stu_img: String,
    Group_id: String,
    Parent_id: String,
    Activity_status: String,
  };
  constructor(
    public service: ServiceService,
    private NavController: NavController,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get("usdata").then((user) => {
      this.user = user;
    });
  }

  qr() {
    this.NavController.navigateForward(["qrcode"]);
  }

  check_result() {
    this.NavController.navigateForward(["check-result"]);
  }



  logout() {
    this.storage.clear().then(() => {
      this.service.alert("success", "Success", "ออกจากระบบสำเร็จ!");
      this.NavController.navigateForward(["login"]);
    });
  }
}
