import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { HttpClient } from '@angular/common/http';

import { ServiceService } from "../../service.service";

@Component({
  selector: "app-check-result",
  templateUrl: "./check-result.page.html",
  styleUrls: ["./check-result.page.scss"],
})
export class CheckResultPage implements OnInit {
  user = {
    Stu_id: String,
    Stu_name: String,
    Stu_password: String,
    Stu_img: String,
    Group_id: String,
    Parent_id: String,
    Activity_status: String,
  };
  result = false;
  select = "SELECT_1";
  dataList = [];

  constructor(
    public service: ServiceService,
    private storage: Storage,
    public http: HttpClient
  ) {
  }

  ngOnInit() {
    this.storage.get("usdata").then((user) => {
      if (user) {
        this.user = user;
        this.load();
      }
    });
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev, ev.detail.value);
    this.select = ev.detail.value;
    this.load();
  }

  load() {
    try {
      this.service.isLoading(true)
      this.service._post("showForCheckList.php", { gid: this.user.Group_id, select: this.select, is_stu: this.user.Stu_id }).then((data) => {
        this.service.isLoading(false)
        if (data["status"]) {
          this.dataList = data["list"]
        } else {
          this.dataList = []
          this.service.alert("error", "Error", data["message"]);
        }
      }, err => {
        this.service.isLoading(false)
      })
    } catch (error) {
      this.service.isLoading(false)
      console.log("!")
      console.log("error", error)
      this.service.alert("error", "Error", "ไม่พบข้อมูล!");
    }

  }


  /* END */

}
