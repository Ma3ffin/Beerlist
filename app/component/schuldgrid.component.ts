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

    constructor(
        private router: Router,
        private schuldService: SchuldService,
        private dataService: DataService
    ) { }

    getSchuldenGrid(): void {

        //this.schuldService.getOwelists().then(owelist => this.owelist = owelist);

        this.dataService
            .getAll().then(
            owelist => this.owelist = owelist,
            error =>  this.errorMessage = <any>error);
    }

    ngOnInit(): void {
        this.getSchuldenGrid();
    }

    onSelect(schuld: Schuld, owelist: Owelist): void {
        this.selectedOwelist = owelist;
        this.selectedSchuld = schuld;
    }

    increase(): void {
        this.dataService.incrementSchuld(this.selectedOwelist.person, this.selectedSchuld.oweperson)
            .then(()=>this.selectedSchuld.value++);
    }

    decrease(): void {
        this.dataService.decreaseSchuld(this.selectedOwelist.person, this.selectedSchuld.oweperson)
            .then(()=>{
                if(this.selectedSchuld.value > 0){
                    this.selectedSchuld.value--;
                }
            });


    }

    /*
    gotoDetail(): void {
        //todo: routerbsp
        let link = ['/schulddetail', this.selectedSchuld.id];
        this.router.navigate(link);
    }
    */
}

