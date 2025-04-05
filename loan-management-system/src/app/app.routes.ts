import { Routes } from '@angular/router';
import { LoanListComponent } from './loan-list/loan-list.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'list', component: LoanListComponent},
    { path: 'login', component: LoginComponent},
    { path: 'apply-loan', component: LoanApplicationComponent}
];
