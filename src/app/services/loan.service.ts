import { Injectable } from '@angular/core';
import { LoanForm } from 'src/app/common/loan-form';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  loanForm: LoanForm = {};

  constructor() {}

  setLoanAmount(data: number) {
    this.loanForm.loanAmount = data;
  }

  setLoanDuration(data: number) {
    this.loanForm.loanTerm = data;
  }

  setApplicantIncome(data: number) {
    this.loanForm.incomeAmount = data;
  }

  setApplicantName(data: string) {
    this.loanForm.applicantName = data;
  }

  setApplicantEmail(data: string) {
    this.loanForm.applicantEmail = data;
  }

  getLoanForm() {
    return this.loanForm;
  }

  reset(): void {
    this.loanForm = {};
  }
}
