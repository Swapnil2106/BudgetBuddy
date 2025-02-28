import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ReportComponentComponent } from './components/report-component/report-component.component';
import { BudgetComponentComponent } from './components/budget-component/budget-component.component';
import { AddNewTransactionComponentComponent } from './components/add-new-transaction-component/add-new-transaction-component.component';

export const routes: Routes = [
  {path:'', component:HomeComponentComponent},
  {path:'home', component:HomeComponentComponent},
  {path:'report', component:ReportComponentComponent},
  {path:'budget', component:BudgetComponentComponent},
  {path:'addNew', component:AddNewTransactionComponentComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
