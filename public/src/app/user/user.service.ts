import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //Servicio de Http para conectar API

import { User } from './user';

import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  

  constructor(private _http: Http) { }

  index() { 
    return this._http.get('/users')
      .map(data => data.json()).toPromise();
  }

  create(user: User) {
    return this._http.post('/users/create', user)
      .map(data => data.json()).toPromise();
  }

  show(user: User) {
  return this._http.get('/users/' + user._id)
      .map(data => data.json()).toPromise();
  }

  update(user: User) {
  return this._http.put('/users/' + user._id, user)
      .map(data => data.json()).toPromise();
  }

  destroy(user: User) {
    return this._http.delete('/users/' + user._id)
      .map(data => data.json()).toPromise();
  }

}
