import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './components/manager/manager.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { FormsModule } from '@angular/forms';
import { OutletComponent } from './components/outlet/outlet.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    ReceiptComponent,
    OutletComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
