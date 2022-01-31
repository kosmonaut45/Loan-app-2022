import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanForm } from 'src/app/common/loan-form';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-applicant-email',
  templateUrl: './applicant-email.component.html',
  styleUrls: ['./applicant-email.component.sass'],
})
export class ApplicantEmailComponent {
  public loanForm: FormGroup;
  submitted: boolean = false;
  public filledLoanForm: LoanForm = this.loanService.getLoanForm();
  @Output()
  nextStep: EventEmitter<number> = new EventEmitter();

  constructor(private fb: FormBuilder, private loanService: LoanService) {
    this.loanForm = fb.group({
      email: [
        '',
        {
          validators: [
            Validators.maxLength(128),
            Validators.email,
            Validators.required,
          ],
        },
      ],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loanForm?.invalid) {
      return;
    }
    this.loanService.setApplicantEmail(this.loanForm.get('email')?.value);
    this.nextStep.emit(5);
  }

  get applicantEmailValid() {
    return this.loanForm.get('email')?.valid;
  }

  get applicantEmail() {
    return this.loanForm.get('email');
  }

  onBack() {
    this.nextStep.emit(3);
  }
}
