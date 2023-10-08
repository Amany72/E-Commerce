import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [


  //blank
  {path:'' ,
canActivate:[authGuard],
  loadComponent:()=>import('./layouts/layout-blank/layout-blank.component').then( (m)=>m.LayoutBlankComponent ),
  children:[
    {path:'' , redirectTo:'home', pathMatch:'full'} ,
  {path:'home' , loadComponent:()=>import('./components/home/home.component').then( (m)=>m.HomeComponent ) , title:'Home'} ,
  {path:'cart' , loadComponent:()=>import('./components/cart/cart.component').then( (m)=>m.CartComponent ) , title:'  Cart'} ,
  {path:'wishList' , loadComponent:()=>import('./components/wish-list/wish-list.component').then( (m)=>m.WishListComponent ) , title:'  Wish List'} ,
  {path:'products' , loadComponent:()=>import('./components/products/products.component').then( (m)=>m.ProductsComponent ) , title:'Products'} ,

  {path:'productdetails/:id' , loadComponent:()=>import('./components/product-details/product-details.component').then( (m)=>m.ProductDetailsComponent) , title:'ProductsDetails'},
  {path:'categories' , loadComponent:()=>import('./components/categories/categories.component').then( (m)=>m.CategoriesComponent ) , title:'Categories'} ,

  {path:'payment/:id' , loadComponent:()=>import('./components/payment/payment.component').then( (m)=>m. PaymentComponent ) , title:'payment'},
  {path:'allorders' , loadComponent:()=>import('./components/orders/orders.component').then( (m)=>m. OrdersComponent ) , title:'alloders'},
  {path:'forgotpassword' , loadComponent:()=>import('./components/forgotpassword/forgotpassword.component').then( (m)=>m. ForgotpasswordComponent) , title:'forgot Password'},






]


},
//auth
 {path:'',
loadComponent:()=>import('./layouts/layout-auth/layout-auth.component').then( (m)=>m.LayoutAuthComponent ),
children:[
  {path:'',redirectTo:'login' , pathMatch:'full'},
  {path:'register' , loadComponent:()=>import('./components/register/register.component').then( (m)=>m.default ) , title:'Register'} ,
  {path:'login' , loadComponent:()=>import('./components/login/login.component').then( (m)=>m.LoginComponent ) , title:'login'},
  {path:'forgotpass' , loadComponent:()=>import('./components/forgotpassword/forgotpassword.component').then( (m)=>m. ForgotpasswordComponent) , title:'forgot Password'}

]
},

{path: '**',loadComponent:()=>import('./components/not-found/not-found.component').then( (m)=>m.NotFoundComponent ) ,title:'NotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration:'enabled'})],


exports: [RouterModule]
})
export class AppRoutingModule { }
