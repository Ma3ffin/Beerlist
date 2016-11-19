import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './component/dashboard.component';
import { EmployeesComponent }      from './component/employees.component';
import { EmployeeDetailComponent }  from './component/employee-detail.component';
import  { SchuldGridComponent } from './component/schuldgrid.component';
import { SchuldDetailComponent } from './component/schuld-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: EmployeeDetailComponent },
    { path: 'schulddetail/:id', component: SchuldDetailComponent },
    { path: 'employees',     component: EmployeesComponent},
    {path: 'schuldgrid',     component: SchuldGridComponent}
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}