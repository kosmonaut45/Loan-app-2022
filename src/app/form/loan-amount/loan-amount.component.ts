import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-amount',
  templateUrl: './loan-amount.component.html',
  styleUrls: ['./loan-amount.component.css']
})
export class LoanAmountComponent implements OnInit {

  public loanForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { 
    this.loanForm = fb.group({
        title: fb.control('initial value', Validators.required)
    });
  }

  ngOnInit() {
  }

}
