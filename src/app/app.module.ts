import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatModuleModule } from './mat-module/mat-module.module';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { NavbarComponent } from './navbar/navbar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingCartComponent,
    HomeComponent,
    NotFoundComponent,
    MyOrderComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    AuthLoginComponent,
    AuthSignupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatModuleModule,

    // Router Module
    RouterModule.forRoot([
      // routes for the anonymous user
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'auth/login', component: AuthLoginComponent },
      { path: 'auth/signup', component: AuthSignupComponent },

      // routes for the normal user
      {
        path: 'check-out',
        component: CheckOutComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'order-success',
        component: OrderSuccessComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'my-orders',
        component: MyOrderComponent,
        canActivate: [AuthGuard],
      },

      // route for admin
      {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGuard, AdminAuthGuardService],
      },
      {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuard, AdminAuthGuardService],
      },

      // Not found page
      { path: '**', component: NotFoundComponent },
    ]),

    // firebase module
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService, AuthGuard, UserService, AdminAuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
