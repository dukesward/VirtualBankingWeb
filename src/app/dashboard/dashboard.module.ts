import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { AccountSummaryComponent } from "../account-summary/account-summary.component";
import { FunddetailComponent } from "../funddetail/funddetail.component";
import { BuyComponentComponent } from "../buy-component/buy-component.component";
import { PrelophomeComponent } from "../prelophome/prelophome.component";
import { PrelopinputComponent } from "../prelopinput/prelopinput.component";
import { PrelopconfirmComponent } from "../prelopconfirm/prelopconfirm.component";
import { PrelopsuccessComponent } from "../prelopsuccess/prelopsuccess.component";
import { NzCollapseModule } from "ng-zorro-antd/collapse";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzButtonModule } from "ng-zorro-antd";
@NgModule({
  declarations: [
    DashboardComponent,
    AccountSummaryComponent,
    FunddetailComponent,
    BuyComponentComponent,
    PrelophomeComponent,
    PrelopinputComponent,
    PrelopconfirmComponent,
    PrelopsuccessComponent
  ],
  imports: [
    CommonModule,
    NzMenuModule,
    DashboardRoutingModule,
    NzCollapseModule,
    NzIconModule,
    NzButtonModule
  ]
})
export class DashboardModule {}
