import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillHomeComponent } from './bills/bill-home/bill-home.component';
import { BillNewComponent } from './bills/bill-new/bill-new.component';
import { BillRouteComponent } from './bills/bill-route/bill-route.component';
import { BillSearchComponent } from './bills/bill-search/bill-search.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { UserRouteComponent } from './component/user-route/user-route.component';
import { AddCustComponent } from './customer/add-cust/add-cust.component';
import { CustRouteComponent } from './customer/cust-route/cust-route.component';
import { CustomersComponent } from './customer/customers/customers.component';
import { HomeComponent } from './customer/home/home.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { ProductHomeComponent } from './product/product-home/product-home.component';
import { ProductRouteComponent } from './product/product-route/product-route.component';
import { SearchComponent } from './product/search/search.component';
import { AuthGuard } from './services/auth-guard.service';
// import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {path:'', component:UserRouteComponent ,children:[
    {path:'register', component:RegisterComponent},
    {path:'account', component:UserInfoComponent},
    {path:'', component:LoginComponent}
  ]},
  {path:'customer',component:CustRouteComponent,canActivate:[AuthGuard] ,children:[
    {path:'home',component:HomeComponent},
    {path:'newcust',component:AddCustComponent},
    {path:'search',component:CustomersComponent}
  ]},
  {path:'product',component:ProductRouteComponent,canActivate:[AuthGuard],children:[
    {path:'',component:ProductHomeComponent},
    {path:'new-product',component:NewProductComponent},
    {path:'search',component:SearchComponent}
  ]},
  {path:'bill',component:BillRouteComponent,canActivate:[AuthGuard],children:[
    {path:'',component:BillHomeComponent},
    {path:'new-bill',component:BillNewComponent},
    {path:'search',component:BillSearchComponent}
  ]},
  {path:'cart',component:CartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
