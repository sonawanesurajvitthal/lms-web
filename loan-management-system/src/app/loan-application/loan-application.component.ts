import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LoanService } from '../service/loan.service';

@Component({
  selector: 'app-loan-application',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.scss'
})
export class LoanApplicationComponent {

loanForm: FormGroup;

constructor(private fb: FormBuilder, private loanService: LoanService){
  this.loanForm = this.fb.group({
    loan:['', Validators.required],
    amount:['', Validators.required]
  });
}

submitLoan(){
  if(this.loanForm.valid){
    this.loanService.applyLoan(this.loanForm.value).subscribe(response =>{
      alert('Loan Applied Successfully!');
    });
  }
}


}
