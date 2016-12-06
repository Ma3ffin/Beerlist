import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { Schuld } from './../data/schuld';
import { Owelist } from './../data/owelist';
import { SchuldService } from './../service/schuld.service';
import { DataService } from './../service/data.service';

@Component({
    moduleId: module.id,
    selector: 'schuld-grid',
    templateUrl: '../view/schuldGrid.component.html',
    styleUrls: [ '../style/schuldGrid.component.css' ]
})

export class SchuldGridComponent implements OnInit{

    errorMessage: string;
    owelist: Owelist[];
    @Input()
    selectedSchuld: Schuld;
    selectedOwelist: Owelist;
    selectedPerson: Owelist;

    constructor(
        private router: Router,
        private schuldService: SchuldService,
        private dataService: DataService
    ) { }

    getSchuldenGrid(): void {

        //this.schuldService.getOwelists().then(owelist => this.owelist = owelist);

        this.dataService
            .getAll().then(
            owelist => this.owelist = owelist)
            .catch(error => this.errorMessage = "Verbindungsfehler");
    }

    ngOnInit(): void {
        this.getSchuldenGrid();
    }

    onSelect(schuld: Schuld, owelist: Owelist): void {
        this.selectedOwelist = owelist;
        this.selectedSchuld = schuld;
    }

    onSelectTitle(owelist: Owelist): void {
        this.selectedPerson = owelist;
    }

    increase(): void {
        this.dataService.incrementSchuld(this.selectedOwelist.person, this.selectedSchuld.oweperson)
            .then(()=>this.selectedSchuld.value++)
            .catch(error => this.errorMessage = "Verbindungsfehler");
    }

    decrease(): void {
        this.dataService.decreaseSchuld(this.selectedOwelist.person, this.selectedSchuld.oweperson)
            .then(()=>{
                if(this.selectedSchuld.value > 0){
                    this.selectedSchuld.value--;
                }
            }).catch(error => this.errorMessage = "Verbindungsfehler");
    }

    delete():void{
        this.dataService.deleteSchuld(this.selectedPerson.person)
            .then(owelist => this.owelist = owelist, this.selectedPerson = null)
            .catch(error => this.errorMessage = "Verbindungsfehler");
    }

    abortDelete():void{
        this.selectedPerson = null
    }

    abort():void{
        this.selectedSchuld = null
        this.selectedOwelist = null
    }


    isValue(value: number): boolean{
        if(value > 0){
            return true
        }
        return false
    }

    /*
    gotoDetail(): void {
        //todo: routerbsp
        let link = ['/schulddetail', this.selectedSchuld.id];
        this.router.navigate(link);
    }
    */
}

