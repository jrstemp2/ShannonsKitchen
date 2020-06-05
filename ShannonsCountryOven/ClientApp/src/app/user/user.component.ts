import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../interfaces/user';

import { UserService } from '../services/user.service';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
/** user component*/
export class UserComponent {
    /** user ctor */
  constructor(private userData: UserService) { }

  user: User;

  ngOnInit() {
    this.user = this.userData.getUser();
  }
}
