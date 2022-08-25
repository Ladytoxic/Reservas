import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  UrlReservar = 'https://laterrazareservas.herokuapp.com/reservar';
  UrlRes = 'https://laterrazareservas.herokuapp.com/reservas'
  constructor(private http: HttpClient) { }

  public obternerReservas(): Observable<any> {
    return this.http.get(this.UrlRes)
  }

  public hacerReserva(reserva: any): Observable<any> {
    return this.http.post<any>(this.UrlReservar, reserva);
  }
}
