import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loggedUser: User;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.loggedUserSubject.asObservable().subscribe(
        user => this.loggedUser = user
    );
  }

  logOutUser(){
      this.userService.logout();
  }


}
