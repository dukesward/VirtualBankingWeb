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
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: "", redirectTo: "prelophome", pathMatch: "full"
}, {
  path: "prelophome", component: PrelophomeComponent
}, {
  path: "prelophome/prelopinput", component: PrelopinputComponent
}, {
  path: "prelophome/prelopconfirm", component: PrelopconfirmComponent
}, {
  path: "prelophome/prelopsuccess", component: PrelopsuccessComponent
}];

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
    RouterModule.forChild(routes),
    CommonModule,
    NzMenuModule,
    DashboardRoutingModule,
    NzCollapseModule,
    NzIconModule,
    NzButtonModule,
    NzToolTipModule,
    NzSkeletonModule
  ]
})
export class DashboardModule { }
