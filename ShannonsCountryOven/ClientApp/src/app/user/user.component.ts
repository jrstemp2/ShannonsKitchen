import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

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
}
