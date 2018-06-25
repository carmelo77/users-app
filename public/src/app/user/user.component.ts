import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  /*users: User[] = [
    new User(1, 'Carmelo', 'Fallone', 'carmelo.ve@gmail.com'),
    new User(2, 'Glynmarit', 'Martinez', 'glynmaritMartinez@gmail.com'),
    new User(3, 'Asarela', 'Fallone', 'asarela77@gmail.com')
  ];*/

  users: User[] = [];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.index();
  }

  index() {
    this._userService.index()
      .then(users => this.users = users); 
  }

  create(user) {
    //this.users.push(user);
    this._userService.create(user)
      .then(status => this.index())
      .catch(err => console.log(err));
  }

  destroy(user: User) {
    /*const i = this.users.indexOf(user);
    this.users.splice(i, 1); */
    this._userService.destroy(user)
      .then(status => this.index())
      .catch(err => console.log(err));
  }

  update(users) {
    /*const i = this.users.indexOf(users.a);
    this.users[i] = users.e;*/
    this._userService.update(users.e)
      .then(status => this.index())
      .catch(err => console.log(err));
  }

}
