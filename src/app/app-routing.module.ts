import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReservaComponent } from './componente/reserva/reserva.component';

const routes: Routes = [
  {path: 'teatrointimo', component: ReservaComponent },
  { path:'',redirectTo:'teatrointimo',pathMatch:'full'},
  { path: '**', component: ReservaComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})



export class AppRoutingModule { }
