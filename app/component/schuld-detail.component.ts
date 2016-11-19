import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Schuld } from './../data/schuld';
import { SchuldService } from './../service/schuld.service';

@Component({
    moduleId: module.id,
    selector: 'schuld-detail',
    templateUrl: '../view/schuld-detail.component.html',
    styleUrls: [ '../style/schuld-detail.component.css' ]
})

export class SchuldDetailComponent implements OnInit{

    @Input() schuld: Schuld;

    constructor(
        private schuldService: SchuldService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.schuldService.getSchuld(id)
                .then(schuld => this.schuld = schuld);
        });
    }

    goBack(): void {
        this.location.back();
    }
}