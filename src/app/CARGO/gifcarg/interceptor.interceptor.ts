import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { GifcargService } from './gifcarg.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private cargaServ: GifcargService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.cargaServ.cargando();
    return next.handle(request).pipe(
      finalize(() => this.cargaServ.cargo()));
  }
}
