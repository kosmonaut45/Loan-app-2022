import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanForm } from 'src/app/common/loan-form';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.sass'],
})
export class IncomeComponent implements OnInit {
  public loanForm: FormGroup;
  submitted: boolean = false;
  public filledLoanForm: LoanForm = this.loanService.getLoanForm();
  @Output()
  nextStep: EventEmitter<number> = new EventEmitter();

  constructor(private fb: FormBuilder, private loanService: LoanService) {
    this.loanForm = fb.group({
      income: [
        '',
        {
          validators: [Validators.required, Validators.pattern('^[0-9]*$')],
        },
      ],
    });
  }

  ngOnInit() {
    if (this.filledLoanForm.incomeAmount) {
      this.loanForm.patchValue({
        income: this.filledLoanForm.incomeAmount,
      });
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.loanForm?.invalid) {
      return;
    }
    this.loanService.setApplicantIncome(this.loanForm.get('income')?.value);
    if (this.loanForm.get('income')?.value < 300) {
      this.nextStep.emit(5);
    } else {
      this.nextStep.emit(3);
    }
  }

  get incomeValid() {
    return this.loanForm.get('income')?.valid;
  }

  get income() {
    return this.loanForm.get('income');
  }
  onBack() {
    this.nextStep.emit(1);
  }
}
