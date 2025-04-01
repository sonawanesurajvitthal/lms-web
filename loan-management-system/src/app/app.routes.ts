import { Routes } from '@angular/router';
import { LoanListComponent } from './loan-list/loan-list.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';

export const routes: Routes = [
    { path: '', component: LoanListComponent},
    { path: 'apply-loan', component: LoanApplicationComponent}
];
