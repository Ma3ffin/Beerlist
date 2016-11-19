import { Injectable } from '@angular/core';
import {Schuld} from "./../data/schuld";
import {Owelist} from "./../data/owelist";
import { OWELIST } from './../data/mock-owelist';

@Injectable()
export class SchuldService {


    getOwelists():Promise<Owelist[]> {
        return Promise.resolve(OWELIST);
    }

    /*
    getSchuldFromPerson(id: number): Promise<Owelist> {
        return this.getSchulden()
            .then(schulden => schulden.find(schuld => schuld.id === id));
    }
    */

}