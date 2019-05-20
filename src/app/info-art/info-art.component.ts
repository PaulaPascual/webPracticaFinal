import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ImageService} from '../image.service';
import {UserService} from '../user.service';
import {User} from '../user.model';
declare var $: any;

@Component({
  selector: 'app-info-art',
  templateUrl: './info-art.component.html',
  styleUrls: ['./info-art.component.css']
})
export class InfoArtComponent implements OnInit {
    loggedUser: User;

  image;
  constructor(private activatedRoute: ActivatedRoute, private imageService: ImageService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params
        .subscribe(
            params =>{
              let id = params['id'];
              this.imageService.getById(id)
                  .subscribe(
                      image=>{
                        this.image = image;
                      }
                  )
            }
        )

      this.userService.loggedUserSubject.asObservable().subscribe(
          user => this.loggedUser = user
      );
  }

    deleteClicked() {
        this.imageService.deleteImage(this.image.id)
            .subscribe(
                success => {
                    $('#modalConfirmDelete').modal('hide')
                    this.router.navigateByUrl('/gallery');
                },
                error => window.alert('No tienes permiso para borrar')
            );

    }



}
