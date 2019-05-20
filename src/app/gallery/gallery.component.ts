import { Component, OnInit } from '@angular/core';
import {ImageService} from '../image.service';
import {User} from '../user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  loggedUser: User;

  images;

  constructor(private activatedRoute: ActivatedRoute, private imageService: ImageService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.imageService.getAllImages()
        .subscribe(
            images => {this.images = images; },
            error => {console.log(error); }
        )
    this.userService.loggedUserSubject.asObservable().subscribe(
        user => this.loggedUser = user
    );
  }

}
