import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './components/manager/manager.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { OutletComponent } from './components/outlet/outlet.component';

const routes: Routes = [ {path: 'manager', component: ManagerComponent },
                         {path: 'receipt', component:ReceiptComponent},
                         {path:  'outlet', component:OutletComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
