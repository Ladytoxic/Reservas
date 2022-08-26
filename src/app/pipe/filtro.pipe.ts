import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultReserva = [];
    for (const reservasList of value) {
      if (reservasList.nonbre.indexOf(arg)>-1){
        resultReserva.push(reservasList);
      }
    }
  }

}
