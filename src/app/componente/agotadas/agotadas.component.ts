import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agotadas',
  templateUrl: './agotadas.component.html',
  styleUrls: ['./agotadas.component.css']
})
export class AgotadasComponent implements OnInit {
  title2 = 'TEATRO ÍNTIMO';
  descripcion2 = "Tres escenas comprometidas para un público reducido, donde lxs espectadores rodean el escenario para ser testigos directos y poder sentirse a solas con les personajes, viviendo el teatro a flor de piel.";
  fecha2 = "Domingo 11 de Septiembre a las 18 hs.";
  constructor() { }

  ngOnInit(): void {
  }

}
