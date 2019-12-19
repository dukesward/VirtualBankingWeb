import { Component, OnInit } from "@angular/core";
import { AppController } from "../services/app.controller.service";
import { HttpHeaders } from "@angular/common/http";
import { AppStore } from "../services/app.store.service";

@Component({
  selector: "app-account-summary",
  templateUrl: "./account-summary.component.html",
  styleUrls: ["./account-summary.component.scss"]
})
export class AccountSummaryComponent implements OnInit {
  constructor(
    private appController: AppController,
    private appStore: AppStore
  ) {}

  ngOnInit() {
    const clientId = this.appStore.getValue("clientId");
    const headers = new HttpHeaders({
      customerId: clientId
    });
    this.appController.get("app_module", "profile", null, headers).subscribe(
      data => {
        console.log("profile: ", data);
      },
      error => {}
    );
    const accountsHeaders = new HttpHeaders({
      clientId: clientId
    });
    this.appController
      .get("app_module", "accounts", null, accountsHeaders)
      .subscribe(
        data => {
          console.log("accounts: ", data);
        },
        error => {}
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
  savingpanels = [
    {
      active: true,
      name: "SAVING",
      disabled: false
    }
  ];
}
