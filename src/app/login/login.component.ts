import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd";
import { AppController } from "../services/app.controller.service";
import { AppStore } from "../services/app.store.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  showLoading: boolean;
  status: boolean = true;
  submitForm(): boolean {
    this.status = true;
    for (const i in this.validateForm.controls) {
      console.log("form: ", this.validateForm.controls[i]);
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      if (this.validateForm.controls[i].status == "INVALID") {
        this.status = false;
      }
    }
    const username = this.validateForm.controls["userName"].value;
    const password = this.validateForm.controls["password"].value;
    //this.showLoading =true
    if (this.status) {
      this.showLoading = true;
      this.appController
        .post("app_module", "login", { username: username, password: password })
        .subscribe(
          data => {
            this.showLoading = false;
            this.appStore.addValue("clientId", data.clientId);
            this.message.create("success", "Login successfully!");
            setTimeout(() => {
              this.route.navigateByUrl("/home");
            }, 1000);
          },
          error => {
            this.showLoading = false;
            this.message.create("error", error.error.details);
          }
        );
    }
    //this.route.navigateByUrl("/home");
    return this.status;
  }

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private message: NzMessageService,
    private appController: AppController,
    private appStore: AppStore
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
