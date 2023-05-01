/* Angular Framework Imports */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

/* NgBootstrap Imports */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Project Imports */
/* Components */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { OrdersComponent } from './orders/orders.component';

/* Directives */
import { PasswordStrengthDirective } from './directives/password-strength.directive';
import { FinishingJobCalculatorComponent } from './finishing-job-calculator/finishing-job-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    ShoppingCartComponent,
    NavbarComponent,
    HomeComponent,
    AccountComponent,
    OrdersComponent,
    PasswordStrengthDirective,
    FinishingJobCalculatorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
