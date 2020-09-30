import { Injectable, HostListener } from '@angular/core';

import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';



@Injectable()

export class RequestInterceptorService implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('oi');
        request = request.clone({
            setHeaders: {
            },
        });

        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {
                console.log(err);
                return throwError(err);
            })
        );


    }



}