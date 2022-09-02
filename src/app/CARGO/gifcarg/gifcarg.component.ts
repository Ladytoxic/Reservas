import { Component, OnInit } from '@angular/core';
import { GifcargService } from './gifcarg.service';

@Component({
  selector: 'app-gifcarg',
  templateUrl: './gifcarg.component.html',
  styleUrls: ['./gifcarg.component.css']
})
export class GifcargComponent implements OnInit {
 carga$ = this.cargaserv.cargando$;
  constructor( private readonly cargaserv : GifcargService) { }

  ngOnInit(): void {
  }

}
