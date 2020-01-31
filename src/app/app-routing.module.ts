import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './components/manager/manager.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { OutletComponent } from './components/outlet/outlet.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guard/login.guard';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [ {path: 'manager', component: ManagerComponent ,canActivate:[LoginGuard] },
                         {path: 'receipt', component:ReceiptComponent ,canActivate:[LoginGuard] },
                         {path: 'outlet', component:OutletComponent, canActivate:[LoginGuard] },
                         {path: 'search', component:SearchComponent ,canActivate:[LoginGuard] },
                         {path: 'report', component:ReportComponent},
                         {path: 'login', component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
