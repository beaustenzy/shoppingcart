import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  userInfo: string;

  addLoginInfo(name: string, usertype: string) {

    this.userInfo = name + ' - ' + usertype;

    console.log(this.userInfo);

  }

}
