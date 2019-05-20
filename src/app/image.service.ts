import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Image} from './image.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './user.model';
import 'rxjs-compat/add/operator/map';


@Injectable({
    providedIn: 'root'
})
export class ImageService {
    images = [];

    constructor(private http: HttpClient) {
    }

    getAllImages() {
        return this.http.get('http://localhost:80/gallery');
    }

    getById(id: number) {
        return this.http.get('http://localhost:80/gallery/' + id);
    }

    saveImage(image: Image) {
        return this.http.post<Image>('http://localhost:80/admi', image);
    }

    deleteImage(id:number)
    {
        return this.http.delete("http://localhost:80/gallery/" +id);
    }

    updateImage(id:number, image: Image)
    {
        return this.http.put<Image>("http://localhost:80/gallery/"+id, image);
    }

}
