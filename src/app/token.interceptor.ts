import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserService} from './user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private usersService: UserService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let loggedUser = this.usersService.loggedUserSubject.getValue();
        if (loggedUser) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${loggedUser.token}`
                }
            });
        }
        return next.handle(req);
    }
}
