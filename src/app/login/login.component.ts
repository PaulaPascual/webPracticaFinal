import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    password = new FormGroup({
        password: new FormControl('')
    })

  constructor(private userService: UserService, private router: Router) { }

  onSubmit(){
    this.userService.login(this.password.value).subscribe(
        () => {
          this.router.navigateByUrl('');
        },
        (error) => {
          window.alert('Not the password that i was waiting for');
        }
    );
  }
  ngOnInit() {
  }

}
