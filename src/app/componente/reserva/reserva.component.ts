import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservaService } from 'src/app/servicio/reserva.service';
import { __values } from 'tslib';

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
    private reservar: ReservaService) { }

  ngOnInit(): void {
    this.formReserva = this.FormBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cantidad: ['1']});


  }
  enviar(): void {
    this.reservar
    console.log(this.formReserva.value);
  }

}
