import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ImageService} from '../image.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {User} from '../user.model';

@Component({
  selector: 'app-admi',
  templateUrl: './admi.component.html',
  styleUrls: ['./admi.component.css']
})
export class AdmiComponent implements OnInit {

  imageForm = new FormGroup({
    image: new FormControl('', Validators.required),
    tittle: new FormControl('', Validators.required),
    size: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })



  constructor(private imageService: ImageService, private router: Router, private userService: UserService) { }

  loggedUser: User;
  onSubmit(){
    this.imageService.saveImage(this.imageForm.value).subscribe(
        (image) => {
          window.location.reload();
          this.router.navigateByUrl('/admi');
        },
        (error) => {
          window.alert('Error to upload photo');
        }
    );
  }

  ngOnInit() {
      this.userService.loggedUserSubject.asObservable().subscribe(
          user => this.loggedUser = user
      );
  }


}
