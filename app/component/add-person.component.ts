import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

import { Location }                 from '@angular/common';

import { DataService } from './../service/data.service';

@Component({
    moduleId: module.id,
    selector: 'add-person',
    templateUrl: '../view/add-person.component.html',
    styleUrls: [ '../style/add-person.component.css' ]
})

export class AddPersonComponent {

    @Input() person: string;

    constructor(
        private router: Router,
        private location: Location,
        private dataService: DataService
    ) {}

    save(): void {
        this.dataService.addPerson(this.person)
            .then(()=>this.location.back());
    }
}