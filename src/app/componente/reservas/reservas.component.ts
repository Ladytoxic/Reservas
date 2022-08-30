import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/servicio/reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  titulo = "Teatro íntimo"
  fecha = "11 de Septiembre - 18hs."
  reservasList: any[] = [];
  reservastotal: any;

  constructor(private reserva: ReservaService) { }
  ngOnInit(): void {
    this.reserva.obternerReservas().subscribe((data: any) => {
      this.reservasList = data;
      const resp = this.reservasList.map(reservasList => reservasList.cantidad).reduce((prev, curr) => prev + curr, 0);
      this.reservastotal = resp
    })




  }


}
