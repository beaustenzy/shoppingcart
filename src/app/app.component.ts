import { Component, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(){}

  title = 'Shopping Cart';

  @ViewChild('divLogin') divLogin: ElementRef;
  @ViewChild('divPage') divPage: ElementRef;

  users: User[] = [{name: 'mike', username: 'mike', password: 'mike' },
                   {name: 'ethan', username: 'ethan', password: 'ethan' },
                   {name: 'beau', username: 'beau', password: 'beau' },
                   {name: 'chris', username: 'chris', password: 'chris' },
                   {name: 'monty', username: 'monty', password: 'monty' }];

  ngOnInit() {
    this.divPage.nativeElement.style.display='none'; 
  }

  login(username: string, password:string) {

    for (let u of this.users) {

      if((u.username==username) && (u.password==password)) {

        this.divLogin.nativeElement.style.display='none';
        this.divPage.nativeElement.style.display='block';

        return;
      }
  
    }

    this.divLogin.nativeElement.style.display='block';
    this.divPage.nativeElement.style.display='none';

    alert('Invalid Login');

  }


}
