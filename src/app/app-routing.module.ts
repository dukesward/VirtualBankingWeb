import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BuyComponentComponent } from './buy-component/buy-component.component';


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "home",
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
    data: { preload: true }
  },
  {
    path: "holdings",
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
    component: BuyComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
