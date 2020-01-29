import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './components/manager/manager.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { FormsModule } from '@angular/forms';
import { OutletComponent } from './components/outlet/outlet.component';
@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    ReceiptComponent,
    OutletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
