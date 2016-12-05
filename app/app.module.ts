import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }        from './app.component';

import  { SchuldGridComponent } from './component/schuldgrid.component';
import { SchuldService }         from './service/schuld.service';
import { DataService }          from './service/data.service';
import { AddPersonComponent } from './component/add-person.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    SchuldGridComponent,
    AddPersonComponent
  ],
  providers: [
    SchuldService,
    DataService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
