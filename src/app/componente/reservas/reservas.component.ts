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
  reservasList:any[] = [] ;
  cantidad = '0';
  constructor(private reserva: ReservaService) { }
  ngOnInit(): void {
    this.reserva.obternerReservas().subscribe((data : any )=>  {
      this.reservasList = data;
      console.log('cantidad')
    })
  }
}
