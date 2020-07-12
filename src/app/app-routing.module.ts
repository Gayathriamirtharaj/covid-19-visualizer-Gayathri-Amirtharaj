import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import { CardComponent } from './card/card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';
import {LoginComponent} from './login/login.component';
import { AuthguardGuard } from './authguard.guard';



const routes: Routes = [
  
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"dashboard",
    canActivate:[AuthguardGuard],
    component:DashboardComponent,
    children:[
      {
        path:"card",
        component:CardComponent
      },
      {
        path:"chart",
        component:ChartComponent
      },
      {
        path:"table",
        component:TableComponent
      }

    ] ,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
