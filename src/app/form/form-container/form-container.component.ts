import { Component, OnDestroy } from '@angular/core';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.sass'],
})
export class FormContainerComponent implements OnDestroy {
  step: number = 0;

  constructor(private loanService: LoanService) {}
  ngOnDestroy(): void {
    this.loanService.reset();
  }

  setStep(currentStep: number) {
    this.step = currentStep;
  }
}
