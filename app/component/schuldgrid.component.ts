import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { Schuld } from './../data/schuld';
import { Owelist } from './../data/owelist';
import { SchuldService } from './../service/schuld.service';

@Component({
    moduleId: module.id,
    selector: 'schuld-grid',
    templateUrl: '../view/schuldGrid.component.html',
    styleUrls: [ '../style/schuldGrid.component.css' ]
})

export class SchuldGridComponent implements OnInit{

    owelist: Owelist[];
    @Input()
    selectedSchuld: Schuld;

    constructor(
        private router: Router,
        private schuldService: SchuldService
    ) { }

    getSchuldenGrid(): void {
        this.schuldService.getOwelists().then(owelist => this.owelist = owelist);
    }
    ngOnInit(): void {
        this.getSchuldenGrid();
    }

    onSelect(schuld: Schuld): void {
        this.selectedSchuld = schuld;
    }

    increase(): void {
        this.selectedSchuld.value++;
    }

    decrease(): void {
        if(this.selectedSchuld.value > 0){
            this.selectedSchuld.value--;
        }

    }

    /*
    gotoDetail(): void {
        //todo: Noch auf falsches Detail
        let link = ['/schulddetail', this.selectedSchuld.id];
        this.router.navigate(link);
    }
    */
}

