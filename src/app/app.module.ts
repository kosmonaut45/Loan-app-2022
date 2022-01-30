import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SummaryComponent } from './form/summary/summary.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { LoanAmountComponent } from './form/loan-amount/loan-amount.component';
import { LoanTermComponent } from './form/loan-term/loan-term.component';
import { IncomeComponent } from './form/income/income.component';
import { DependenciesComponent } from './form/dependencies/dependencies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SummaryComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    MainContainerComponent,
    LoanAmountComponent,
    LoanTermComponent,
    IncomeComponent,
    DependenciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
