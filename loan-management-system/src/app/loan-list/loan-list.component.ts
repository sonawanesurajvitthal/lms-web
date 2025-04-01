import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoanService } from '../service/loan.service';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-loan-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule],
  templateUrl: './loan-list.component.html',
  styleUrl: './loan-list.component.scss'
})
export class LoanListComponent implements OnInit {

  loans: any[] = [];

  constructor(private loanService: LoanService){}

  ngOnInit(){
    this.loanService.getAllLoans().subscribe(data =>{
      this.loans = data;
    })
  }

}
