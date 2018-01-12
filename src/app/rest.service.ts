import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';



import 'rxjs/add/operator/map';



@Injectable()
export class RestService {


 _url: string = 'http://localhost:5000/';

  constructor(private http: Http) {
      console.log('rest service is triggerd');
   }

get(url) {
  return this.http.get(this._url + url).map(res => res.json());
   }
}
