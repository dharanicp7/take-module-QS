import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { RegisterComponent } from './component/register/register.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { HomeComponent } from './customer/home/home.component';
import { AddCustComponent } from './customer/add-cust/add-cust.component';
import { CustomersComponent } from './customer/customers/customers.component';
import { UserRouteComponent } from './component/user-route/user-route.component';
import { CustRouteComponent } from './customer/cust-route/cust-route.component';
import { AuthenticationService } from './services/auth.service';
import { ProductHomeComponent } from './product/product-home/product-home.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { SearchComponent } from './product/search/search.component';
import { ProductRouteComponent } from './product/product-route/product-route.component';
import { BillHomeComponent } from './bills/bill-home/bill-home.component';
import { BillNewComponent } from './bills/bill-new/bill-new.component';
import { BillSearchComponent } from './bills/bill-search/bill-search.component';
import { BillRouteComponent } from './bills/bill-route/bill-route.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    UserInfoComponent,
    HomeComponent,
    AddCustComponent,
    CustomersComponent,
    UserRouteComponent,
    CustRouteComponent,
    ProductHomeComponent,
    NewProductComponent,
    SearchComponent,
    ProductRouteComponent,
    BillHomeComponent,
    BillNewComponent,
    BillSearchComponent,
    BillRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
