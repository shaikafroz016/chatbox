import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HttpinterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let x=localStorage.getItem('tocken');

    const newrequest=request.clone({
      headers:request.headers.set('Authorization',`Bearer ${x}`)
    })
    return next.handle(newrequest);
  }
}
