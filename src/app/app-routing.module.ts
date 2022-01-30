import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DependenciesComponent } from './form/dependencies/dependencies.component';
import { HomeComponent } from './home/home.component';
import { IncomeComponent } from './form/income/income.component';
import { LoanAmountComponent } from './form/loan-amount/loan-amount.component';
import { LoanTermComponent } from './form/loan-term/loan-term.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { SummaryComponent } from './form/summary/summary.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: MainContainerComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'summary', component: SummaryComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'amount', component: LoanAmountComponent },
      { path: 'term', component: LoanTermComponent },
      { path: 'income', component: IncomeComponent },
      { path: 'dependencies', component: DependenciesComponent },      
    ],
  },

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
