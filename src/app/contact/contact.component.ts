import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ContactService} from '../contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required),
    data: new FormControl('', Validators.required)
  })
  constructor(private contactService: ContactService, private router: Router) { }

  onSubmit(){
    this.contactService.saveContact(this.userForm.value).subscribe(
        (user) => {
          window.alert('You´re information has been sending');
          this.router.navigate(['/']);
        },
        (error) => {
            window.alert('ERROR');
        }
    );
  }

  ngOnInit() {
  }

}
