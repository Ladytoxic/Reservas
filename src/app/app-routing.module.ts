import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReservaComponent } from './componente/reserva/reserva.component';
import { ReservasComponent } from './componente/reservas/reservas.component';
import { InfoComponent } from './componente/info/info.component';
import { AgotadasComponent } from './componente/agotadas/agotadas.component';

const routes: Routes = [
  { path: 'end', component: InfoComponent },
  { path: 'teatrointimo/reservas', component: ReservasComponent },
  { path: 'teatrointimo', component: AgotadasComponent },
  { path: '', redirectTo: 'teatrointimo', pathMatch: 'full' },
  {path: '**', component: ReservaComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})



export class AppRoutingModule { }
