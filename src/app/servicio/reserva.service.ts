import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TrackHttpError } from '../model/TrackHttpError';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  UrlReservar = 'https://laterrazareservas.herokuapp.com/reservar';
  UrlReservas = 'https://laterrazareservas.herokuapp.com/reservas'
  Local = 'http://localhost:8080/reservas'
  Local2 = 'http://localhost:8080/reservar'
  constructor(private http: HttpClient) { }

  public obternerReservas(): Observable<any> {
    return this.http.get(this.UrlReservas)
  }

  public hacerReserva(reserva: any): Observable<any> {
    return this.http.post<any>(this.UrlReservar, reserva);
  }
  // public obternerReservas(): Observable<any> {
  //   return this.http.get(this.Local)
  //     .pipe(catchError(this.errorHandler))
  // }
  // public hacerReserva(reserva: any): Observable<any> {
  //   return this.http.post<any>(this.Local2, reserva)
  //     .pipe(catchError(this.errorHandler));
  // }
  // errorHandler(error: HttpErrorResponse) {
  //   return throwError(error.message)

  // };

  private handeleHttpError(
    error: HttpErrorResponse
  ): Observable<TrackHttpError> {
    let dataError = new TrackHttpError();
    dataError.errorNumber = error.status;
    dataError.message = error.statusText;
    dataError.amigable = 'Todo salio mal'
    return throwError(dataError)

  }

}
