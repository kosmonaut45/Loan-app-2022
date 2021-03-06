import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanForm } from 'src/app/common/loan-form';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-amount',
  templateUrl: './loan-amount.component.html',
  styleUrls: ['./loan-amount.component.sass'],
})
export class LoanAmountComponent implements OnInit {
  public loanForm: FormGroup;
  submitted: boolean = false;
  public filledLoanForm: LoanForm = this.loanService.getLoanForm();
  @Output()
  nextStep: EventEmitter<number> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private loanService: LoanService
  ) {
    this.loanForm = fb.group({
      amount: [
        '',
        {
          validators: [
            Validators.min(500),
            Validators.max(20000),
            Validators.pattern('^[0-9]*$'),
            Validators.required,
          ],
        },
      ],
    });
  }

  ngOnInit() {
    if (this.filledLoanForm.loanAmount) {
      this.loanForm.patchValue({
        amount: this.filledLoanForm.loanAmount,
      });
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.loanForm?.invalid) {
      return;
    }
    this.loanService.setLoanAmount(this.loanForm.get('amount')?.value);
    this.nextStep.emit(1);
  }

  get loanAmountValid() {
    return this.loanForm.get('amount')?.valid;
  }

  get amount() {
    return this.loanForm.get('amount');
  }
}
