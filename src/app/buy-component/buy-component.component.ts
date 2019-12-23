import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HoldingResp } from "src/model/holding/HoldingResp";
import { HoldingDetails } from "src/model/holding/HoldingDetails";
import { AppController } from "../services/app.controller.service";

@Component({
  selector: "app-buy-component",
  templateUrl: "./buy-component.component.html",
  styleUrls: ["./buy-component.component.css"]
})
export class BuyComponentComponent implements OnInit {
  holdingResp: HoldingResp;
  data: Array<HoldingDetails>;
  constructor(private http: HttpClient, private appController: AppController) {}
  param: Array<string>;
  ngOnInit() {
    this.param = new Array<string>();
    this.param[0] = "10000001";
    this.getHoldingResp();
  }

  getHoldingResp() {
    this.appController
      .get("app_module", "mutualFundHoldings", null, null, this.param)
      .subscribe(
        resp => {
          console.log("data==>", resp);
          this.data = resp.data;
        },
        error => {
          console.error("Get holdings error...");
        }
      );
  }
}
