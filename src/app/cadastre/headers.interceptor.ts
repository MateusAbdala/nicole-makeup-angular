// import { AuthService } from '../services/auth.service';
// import {
//   HttpErrorResponse,
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest
// } from '@angular/common/http';
// import { Injectable, Injector } from '@angular/core';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/throw';
// import { Observable } from 'rxjs';

// @Injectable()
// export class HeadersInterceptor implements HttpInterceptor {

//   constructor(private injector: Injector) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     if (request.headers.keys().includes('ignoreInterceptor') ||
//       request.headers.keys().includes('Access-Control-Allow-Origin')) {
//       return next.handle(request);
//     }

//     request = request.clone({
//       setHeaders: {
//         Authorization: localStorage.getItem('token')
//       }
//     });

//     return next.handle(request).map((event: HttpEvent<any>) => {
//       return event;
//     }).catch((err: any) => {
//       if (err instanceof HttpErrorResponse) {
//         if (err.status === 401) {
//           // Get the logout function from the service.
//           const auth = this.injector.get(AuthService);
//           auth.logout();
//         }
//         return Observable.throw(err);
//       }
//     })
//   }
// }

import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.headers.keys().includes('ignoreInterceptor') ||
      request.headers.keys().includes('Access-Control-Allow-Origin')) {
      return next.handle(request);
    }

    const token: string = localStorage.getItem('token');

    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
          // this.errorDialogService.openDialog(event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            // Get the logout function from the service.
            const auth = this.injector.get(AuthService);
            auth.logout();
          }
          let data = {};
          data = {
            reason: error && error.error.reason ? error.error.reason : '',
            status: error.status
          };
          console.log(data);
          return throwError(error);
        }

      }));
  }
}