import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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
  // }
  // public hacerReserva(reserva: any): Observable<any> {
  //   return this.http.post<any>(this.Local2, reserva)

  // }
}
