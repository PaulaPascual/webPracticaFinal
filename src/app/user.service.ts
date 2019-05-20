import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user.model';
import {BehaviorSubject, Observable} from 'rxjs';
import 'rxjs-compat/add/operator/map';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    public loggedUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('loggedUser')));


    constructor(private http: HttpClient){
    }



    login(password)
    {
        return this.http.post<User>('http://localhost:80/login', password)
            .map(user => {
                localStorage.setItem('loggedUser', JSON.stringify(user));
                this.loggedUserSubject.next(user);
            });
    }

    logout() {
        localStorage.removeItem('loggedUser');
        this.loggedUserSubject.next(null);
    }



}
