import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Owelist} from "./../data/owelist";
import {Schuld} from "./../data/schuld";


@Injectable()
export class DataService {
    //private baseUrl: string = 'http://beerlistserviceforneustiftgasse.azurewebsites.net/api/';
    private baseUrl: string = 'http://localhost:50922/api/';

    constructor(private http : Http){
    }

    getAll(): Promise<Owelist[]>{
        return this.http.get(this.baseUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        let owelist : Owelist[] = [];
        let i = 0;
        for(let person of body){
            owelist.push({ person: person.name, schulden: Schuld[0] = []})
            for(let schuld of person.schuldnerliste) {
                owelist[i].schulden.push({oweperson: schuld.schuldner, value: schuld.value});
            }
            i++;
        }
        return owelist;
    }

    incrementSchuld (getname: string, owename: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = this.baseUrl+getname+"/inc/"+owename;
        console.log(url);

        return this.http.put(url, options).toPromise().then(()=>true)
            .catch(this.handleError);
    }

    decreaseSchuld (getname: string, owename: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = this.baseUrl+getname+"/dec/"+owename;

        return this.http.put(url, options).toPromise().then(()=>true)
            .catch(this.handleError);
    }

    addPerson (name: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = this.baseUrl+name+"/add";

        return this.http.post(url, options).toPromise().then(()=>true)
            .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}