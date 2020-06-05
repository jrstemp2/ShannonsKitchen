import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserLogin } from '../interfaces/user';
import { Local } from 'protractor/built/driverProviders';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  signupUser(user: User): Observable<UserLogin> {
    return this.http.post<UserLogin>('/api/User/signup', user);
  }

  loginUser(user: User): Observable<UserLogin> {
    return this.http.post<UserLogin>('/api/User/login', user);
  }

  logoutUser() {
    localStorage.removeItem('user');
  }

  getUser(): User {
    return JSON.parse(localStorage.user);
  }

  getCurrentUserID(): number {
    const user: User = JSON.parse(localStorage.user);
    if (user) {
      return user.id;
    } else {
      return -1;
    }
  }

}
