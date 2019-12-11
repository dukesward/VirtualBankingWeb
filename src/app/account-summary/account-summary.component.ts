import { Component, OnInit } from "@angular/core";
import { AppController } from "../services/app.controller.service";

@Component({
  selector: "app-account-summary",
  templateUrl: "./account-summary.component.html",
  styleUrls: ["./account-summary.component.scss"]
})
export class AccountSummaryComponent implements OnInit {
  constructor(private appController: AppController) {}

  ngOnInit() {
    this.appController.get("app_module", "mutualFundSearch").subscribe(
      data => {
        console.log("login response: ", data);
      },
      error => {
        console.log("login response: ", error);
      }
    );
  }

  panels = [
    {
      active: true,
      name: "CHECKING",
      disabled: false,
      rightheader: "Total On Deposit $8107.39"
    }
  ];
}
