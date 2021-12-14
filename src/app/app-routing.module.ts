import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ShoppingCartDetailsComponent } from './components/shopping-cart-details/shopping-cart-details.component';
import { UserComponent } from './components/user/user.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { CategoryComponent } from './components/category/category.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';


const routes: Routes = [
  {path: '', component: LayoutComponent, children:[
    {path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
    {path: 'panier', component:ShoppingCartDetailsComponent,canActivate: [AuthGuard]},
    {path: 'users', component:UserComponent,canActivate: [AuthGuard]},
    {path: 'products', component:ProductComponent,canActivate: [AuthGuard]},
    {path: 'categories', component:CategoryComponent,canActivate: [AuthGuard]},
    {path: 'cartDetails', component:ShoppingCartDetailsComponent,canActivate: [AuthGuard]},
  ]},
  {path: '',
    redirectTo: 'login',
    pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
