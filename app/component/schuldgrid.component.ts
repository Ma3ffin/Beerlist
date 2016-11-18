import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Schuld } from './../data/schuld';
import { SchuldService } from './../service/schuld.service';

@Component({
    moduleId: module.id,
    selector: 'schuld-grid',
    templateUrl: '../view/schuldGrid.component.html',
    styleUrls: [ '../style/schuldGrid.component.css' ]
})

export class SchuldGridComponent implements OnInit{

    schulden: Schuld[];
    selectedSchuld: Schuld;

    constructor(
        private router: Router,
        private schuldService: SchuldService
    ) { }

    getSchuldenGrid(): void {
        this.schuldService.getSchulden().then(schulden => this.schulden = schulden);
    }
    ngOnInit(): void {
        this.getSchuldenGrid();
    }

    onSelect(schuld: Schuld): void {
        this.selectedSchuld = schuld;
    }

    gotoDetail(): void {
        //todo: Noch auf falsches Detail
        let link = ['/detail', this.selectedSchuld.id];
        this.router.navigate(link);
    }
}

