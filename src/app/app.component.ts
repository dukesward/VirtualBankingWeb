import { Component, OnInit } from "@angular/core";
import { AppConfig } from "./services/app.config.service";
import { AppController } from "./services/app.controller.service";
import { Router } from "@angular/router";
import { AppStore } from "./services/app.store.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  constructor(
    private appConfig: AppConfig,
    private appController: AppController,
    private router: Router,
    private appStore: AppStore
  ) {
    if (!this.appStore.getValue("clientId")) {
      this.router.navigateByUrl("/");
    }
  }
  title = "virtual-bank-web";
}
