import {HttpInterceptor, HttpEvent, HttpRequest,HttpHandler} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AddFullUrlInterceptor implements HttpInterceptor {

  static readonly BASE_URL = environment.baseUrl;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      url: AddFullUrlInterceptor.BASE_URL + request.url
    });
    return next.handle(request);
  }
}
