import { Component, OnInit, Input } from "@angular/core";
import { AppController } from "../services/app.controller.service";
import { HttpHeaders } from "@angular/common/http";
import { AppStore } from "../services/app.store.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-account-summary",
  templateUrl: "./account-summary.component.html",
  styleUrls: ["./account-summary.component.scss"]
})
export class AccountSummaryComponent implements OnInit {
  constructor(
    private appController: AppController,
    private appStore: AppStore,
    private activatedRoute: ActivatedRoute
  ) {}
  @Input() firstName: String;
  savingList: any;
  checkingList: any;
  creditList: any;
  ngOnInit() {
    this.activatedRoute.url.subscribe(params => {
      this.getProfile();
      this.getAccounts();
    });
  }

  loading: boolean = true;
  getProfile() {
    const clientId = this.appStore.getValue("clientId");

    const headers = new HttpHeaders({
      customerId: clientId
    });
    this.appController.get("app_module", "profile", null, headers).subscribe(
      data => {
        this.firstName = data.firstName;
        console.log("profile: ", data);
        this.loading = false;
      },
      error => {}
    );
  }

  getAccounts() {
    const clientId = this.appStore.getValue("clientId");
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
