import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanForm } from 'src/app/common/loan-form';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-applicant-name',
  templateUrl: './applicant-name.component.html',
  styleUrls: ['./applicant-name.component.sass'],
})
export class ApplicantNameComponent implements OnInit {
  public loanForm: FormGroup;
  submitted: boolean = false;
  public filledLoanForm: LoanForm = this.loanService.getLoanForm();
  @Output()
  nextStep: EventEmitter<number> = new EventEmitter();

  constructor(private fb: FormBuilder, private loanService: LoanService) {
    this.loanForm = fb.group({
      name: [
        '',
        {
          validators: [
            Validators.maxLength(64),
            Validators.pattern('^[a-zA-Z ]*$'),
            Validators.required,
          ],
        },
      ],
    });
  }

  ngOnInit() {
    if (this.filledLoanForm.applicantName) {
      this.loanForm.patchValue({
        name: this.filledLoanForm.applicantName,
      });
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.loanForm?.invalid) {
      return;
    }
    this.loanService.setApplicantName(this.loanForm.get('name')?.value);
    this.nextStep.emit(4);
  }

  get applicantNameValid() {
    return this.loanForm.get('name')?.valid;
  }

  get applicantName() {
    return this.loanForm.get('name');
  }

  onBack() {
    this.nextStep.emit(2);
  }
}
