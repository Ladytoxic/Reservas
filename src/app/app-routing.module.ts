import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReservaComponent } from './componente/reserva/reserva.component';
import { ReservasComponent } from './componente/reservas/reservas.component';
import { InfoComponent } from './componente/info/info.component';

const routes: Routes = [
  { path: 'end', component: InfoComponent },
  { path: 'teatrointimo/reservas', component: ReservasComponent },
  { path: 'teatrointimo', component: ReservaComponent },
  { path: '', redirectTo: 'teatrointimo', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})



export class AppRoutingModule { }
