import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ImageService} from '../image.service';
import {UserService} from '../user.service';
import {User} from '../user.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-modify-art',
  templateUrl: './modify-art.component.html',
  styleUrls: ['./modify-art.component.css']
})
export class ModifyArtComponent implements OnInit {
  loggedUser: User;


  image;


  imageForm = new FormGroup({
    tittle: new FormControl(),
    size: new FormControl(),
    description: new FormControl()
  })

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

  onSubmit(){
    if (this.imageForm.get('tittle').value != null){
      this.image.tittle=this.imageForm.get('tittle').value;
    }
    if (this.imageForm.get('size').value != null){
      this.image.size=this.imageForm.get('size').value;
    }
    if (this.imageForm.get('description').value != null){
      this.image.description=this.imageForm.get('description').value;
    }

    this.imageService.updateImage(this.image.id, this.image)
        .subscribe(
            success=>{
              this.router.navigateByUrl('/gallery')
            },
            error => window.alert('Error')
        );
  }



}
