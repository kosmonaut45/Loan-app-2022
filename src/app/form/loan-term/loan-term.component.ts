import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanForm } from 'src/app/common/loan-form';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-term',
  templateUrl: './loan-term.component.html',
  styleUrls: ['./loan-term.component.sass'],
})
export class LoanTermComponent implements OnInit {
  public loanForm: FormGroup;
  submitted: boolean = false;
  public filledLoanForm: LoanForm = this.loanService.getLoanForm();
  @Output()
  nextStep: EventEmitter<number> = new EventEmitter();

  constructor(private fb: FormBuilder, private loanService: LoanService) {
    this.loanForm = fb.group({
      term: [
        '12',
        {
          validators: [
            Validators.min(6),
            Validators.max(60),
            Validators.required,
          ],
        },
      ],
    });
  }

  ngOnInit() {
    if (this.filledLoanForm.loanTerm) {
      this.loanForm.patchValue({
        term: this.filledLoanForm.loanTerm,
      });
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.loanForm?.invalid) {
      return;
    }
    this.loanService.setLoanDuration(this.loanForm.get('term')?.value);
    this.nextStep.emit(2);
  }

  get loanTermValid() {
    return this.loanForm.get('term')?.valid;
  }

  formatLabel(value: number) {
    return value + 'm';
  }

  onBack() {
    this.nextStep.emit(0);
  }
}
