import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user.model';
import {BehaviorSubject, Observable} from 'rxjs';
import 'rxjs-compat/add/operator/map';
import {Contact} from './contact.model';


@Injectable({
    providedIn: 'root'
})
export class ContactService {


    constructor(private http: HttpClient){
    }

    saveContact(contact:Contact){
        return this.http.post<Contact>('http://localhost:80/contact', contact);
    }

}
