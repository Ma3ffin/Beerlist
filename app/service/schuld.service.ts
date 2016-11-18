import { Injectable } from '@angular/core';
import {Schuld} from "./../data/schuld";
import { SCHULD } from './../data/mock-schuld';

@Injectable()
export class SchuldService {


    getSchulden():Promise<Schuld[]> {
        return Promise.resolve(SCHULD);
    }

    getSchuld(id: number): Promise<Schuld> {
        return this.getSchulden()
            .then(schulden => schulden.find(schuld => schuld.id === id));
    }

    /*
    getSchuldenByLine(line: number): Promise<Schuld[]> {
        return this.getSchulden()
            .then(schulden => schulden.find(schuld => schuld.line === line));
    }*/
}