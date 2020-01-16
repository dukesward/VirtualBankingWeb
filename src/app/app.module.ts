import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  NgZorroAntdModule,
  NZ_I18N,
  en_US,
  NzButtonModule
} from "ng-zorro-antd";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { LoginComponent } from "./login/login.component";
import { NzInputModule } from "ng-zorro-antd/input";
import { LoadingComponent } from "./loading/loading.component";
import { NzFormModule } from "ng-zorro-antd/form";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { NzMessageModule } from "ng-zorro-antd/message";
import { TimeoutInterceptor, DEFAULT_TIMEOUT } from "./timeout.interceptor";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoadingComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    ReactiveFormsModule,
    DashboardModule,
    NzMessageModule
  ],
  providers: [
    [{ provide: NZ_I18N, useValue: en_US }],
    [{ provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true }],
    [{ provide: DEFAULT_TIMEOUT, useValue: 30000 }]
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
