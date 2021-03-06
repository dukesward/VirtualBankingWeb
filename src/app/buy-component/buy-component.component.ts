import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
    const header = new HttpHeaders({
      timeout: `${8000}`
    });
    this.appController
      .get("app_module", "mutualFundHoldings", null, header, this.param)
      .subscribe(
        resp => {
          console.log("data==>", resp);
          this.data = resp.data;
        },
        error => {
          this.getMockRespHolding();
          console.error("Get holdings error...");
        }
      );
  }

  getMockRespHolding() {
    this.http
      .get("http://localhost:4200/assets/resp/holdings.json")
      .subscribe((resp: any) => {
        console.log("Get mock resp holding");
        this.data = resp.data;
      });
  }
}
