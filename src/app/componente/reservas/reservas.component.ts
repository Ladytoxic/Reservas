import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/servicio/reserva.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
reservasList :any;
  constructor(private reserva: ReservaService) { }

  ngOnInit(): void {
    this.reserva.obternerReservas().subscribe(resp => {
        this.reservasList = resp;
    })
  }

}
