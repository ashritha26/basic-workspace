// Use the random user generator API found here: https://randomuser.me/ to retrieve data for your services.
// Further documentation for implementation can be found here: https://randomuser.me/documentation#format

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'apps/monorepofun/src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FormsService {

    constructor(private http: HttpClient) { }

    readonly url = environment.randomUsersApiUrl;
    readonly REQUIRED_PARAMS: string = 'name,email,phone,location,picture';
    params: HttpParams;

    getUsers(): Observable<any> {
        this.params = new HttpParams().set('results', environment.usersLimit).set('inc', this.REQUIRED_PARAMS);
        return this.http.get(this.url, {params : this.params});
    }
};
