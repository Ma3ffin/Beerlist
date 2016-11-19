import { Component, Input } from '@angular/core';

import { Location }                 from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'add-person',
    templateUrl: '../view/add-person.component.html',
    styleUrls: [ '../style/add-person.component.css' ]
})

export class AddPersonComponent {

    @Input() person: string;

    constructor(
        private location: Location
    ) {}

    save(): void {
        this.location.back();
    }
}