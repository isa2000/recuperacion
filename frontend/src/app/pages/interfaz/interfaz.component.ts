import { Component } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.component.html',
  styleUrls: ['./interfaz.component.css']
})
export class InterfazComponent {

  code: string = '';
  bus: any = {};
  eliminado:any = {}

constructor(private buss: ClienteService){

}
buscar(){

  this.buss.obtenerClientes(this.bus).pipe(
    tap(data=>{
      this.bus = data
    }),catchError(e =>{

      throw e
    }

    )
  ).subscribe()
}
eliminar(){
  const id = parseInt(this.bus.id)
  this.bus.id = id
  console.log(this.bus);
  
  
  this.buss.eliminarCliente(this.bus).pipe(
    tap(data =>{

      console.log(data);
      
    }), 
    catchError(e=>{

      throw e
    })
  ).subscribe()
}
}
