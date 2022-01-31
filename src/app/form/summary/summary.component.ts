import { Component } from '@angular/core';
import { LoanForm } from 'src/app/common/loan-form';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass'],
})
export class SummaryComponent {
  public loanForm: LoanForm = this.loanService.getLoanForm();

  constructor(private loanService: LoanService) {}
}
