import { Component } from '@angular/core';

@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.component.html',
  styleUrls: ['./interfaz.component.css']
})
export class InterfazComponent {

  codigo: string = '';
  datos: any;

  // constructor(private servicioHttp: TuServicioHttp) { } // Reemplaza 'TuServicioHttp'

  // buscarDatos() {
  //   this.servicioHttp.obtenerDatos(this.codigo).subscribe((res: any) => {
  //     this.datos = res; // Aquí asumimos que 'res' contiene los datos obtenidos desde el servidor
  //   }, (error) => {
  //     console.error('Error al buscar datos:', error);
  //   });
  // }

}
