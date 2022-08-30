import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/servicio/reserva.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  title = 'TEATRO ÍNTIMO';
  descripcion = "Tres escenas comprometidas para un público reducido, donde lxs espectadores rodean el escenario para ser testigos directos y poder sentirse a solas con les personajes, viviendo el teatro a flor de piel.";
  fecha = "domingo 11 de Septiembre";
  hora = "18hs"
  direccion = "Av. Aviación 690, 1er Piso (Longchamps)"
  Lista: any;
  reserva: any;
  id : any;
  constructor(private reservar: ReservaService) { }


  ngOnInit(): void {
    this.reservar.obternerReservas().subscribe(data => {
      this.Lista = data;
      this.reserva =this.Lista[0]
      this.id = this.reserva.id
      console.log(this.id);
    })
  }
}
