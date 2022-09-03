import { HttpErrorResponse } from '@angular/common/http';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertaService } from 'src/app/servicio/alerta.service';
import { ReservaService } from 'src/app/servicio/reserva.service';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  title = 'TEATRO ÍNTIMO';
  descripcion = "Tres escenas comprometidas para un público reducido, donde lxs espectadores rodean el escenario para ser testigos directos y poder sentirse a solas con les personajes, viviendo el teatro a flor de piel.";
  fecha = "Domingo 11 de Septiembre 18hs.";
  formReserva!: FormGroup;

  constructor(private FormBuilder: FormBuilder,
    private reservar: ReservaService, private alerta: AlertaService, private ruta: Router) { }

  ngOnInit(): void {
    this.formReserva = this.FormBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cantidad: ['1']
    });
  }
  enviar(): void {
    this.reservar.hacerReserva(this.formReserva.value).subscribe(
      data => {
        this.alerta.correct('Todo salio bien', '¡RESERVA REALIZADA!')
        this.ruta.navigate(['end'], { queryParams: { resp: 'reserva' } })
        console.log(data.id)
      }
      // err => {
      //   return this.alerta.incorrect('Vuelva a intentar', "¡RESERVA NO REALIZADA!")
      //   console.log('Ocurrio un error', err)
      // },
      // () => {console.log('Función Terminada')}
    );
  }

}
