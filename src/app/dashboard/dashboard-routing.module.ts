import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountSummaryComponent } from "../account-summary/account-summary.component";
import { DashboardComponent } from "./dashboard.component";
import { BuyComponentComponent } from "../buy-component/buy-component.component";
import { PrelophomeComponent } from "../prelophome/prelophome.component";
import { PrelopinputComponent } from "../prelopinput/prelopinput.component";
import { PrelopconfirmComponent } from "../prelopconfirm/prelopconfirm.component";
import { PrelopsuccessComponent } from "../prelopsuccess/prelopsuccess.component";

const dashboardRoutes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        redirectTo: "/account",
        pathMatch: "full"
      },
      { path: "account", component: AccountSummaryComponent },
      {
        path: "buy",
        component: BuyComponentComponent
      },
      {
        path: "prelophome",
        component: PrelophomeComponent
      },
      {
        path: "prelophome/prelopinput",
        component: PrelopinputComponent
      },
      {
        path: "prelophome/prelopconfirm",
        component: PrelopconfirmComponent
      },
      {
        path: "prelophome/prelopsuccess",
        component: PrelopsuccessComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
