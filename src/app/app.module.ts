import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReservaComponent } from './componente/reserva/reserva.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReservasComponent } from './componente/reservas/reservas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { InfoComponent } from './componente/info/info.component';
import { FiltroPipe } from './pipe/filtro.pipe';
import { GifcargComponent } from './CARGO/gifcarg/gifcarg.component';
import { InterceptorInterceptor } from './CARGO/gifcarg/interceptor.interceptor';
import { PersonaComponent } from './componente/reservas/persona/persona.component';
import { FooterComponent } from './componente/footer/footer.component';
import { AgotadasComponent } from './componente/agotadas/agotadas.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservaComponent,
    ReservasComponent,
    InfoComponent,
    FiltroPipe,
    GifcargComponent,
    PersonaComponent,
    FooterComponent,
    AgotadasComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
