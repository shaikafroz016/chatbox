import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable()
export class HttpinterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token=localStorage.getItem('tocken');
  let tokendata;
  if(token){
    tokendata=JSON.parse(token);
  }

    const newrequest=request.clone({
      headers:request.headers.set('Authorization',`Bearer ${tokendata?.token?tokendata?.token:''}`)
    })
    return next.handle(newrequest).pipe(
      catchError((error:any)=>{
        const errobj=error.error;
        return throwError(errobj)
      })
    );
  }
}
