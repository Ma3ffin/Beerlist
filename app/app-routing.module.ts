import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import  { SchuldGridComponent } from './component/schuldgrid.component';
import { AddPersonComponent } from './component/add-person.component';

const routes: Routes = [
    { path: '', redirectTo: '/schuldgrid', pathMatch: 'full' },
    { path: 'addperson', component: AddPersonComponent },
    {path: 'schuldgrid',     component: SchuldGridComponent}
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}