import { Component } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { IFlight } from 'src/app/interfaces/IFlight';
import { ClienteService } from 'src/app/services/cliente.service';



@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.component.html',
  styleUrls: ['./interfaz.component.css']
})
export class InterfazComponent {

  code: string = '';
  flights: any = {};
  eliminado:any = {}

  arreglo:IFlight[] = [
    {
    id:1,
    number:1,
    code:"123456",
    capacity:23,
    from:"israel",
    to:"manabi"

  },
  {
    id:2,
    number:2,
    code:"3549616",
    capacity:23,
    from:"israel",
    to:"manabi"

  },
  {
    id:3,
    number:3,
    code:"316162",
    capacity:23,
    from:"israel",
    to:"manabi"

  },
  {
    id:4,
    number:4,
    code:"351616",
    capacity:23,
    from:"israel",
    to:"manabi"

  },
  {
    id:5,
    number:5,
    code:"3165161",
    capacity:23,
    from:"israel",
    to:"manabi"

  },
  {
    id:6,
    number:6,
    code:"316516",
    capacity:23,
    from:"israel",
    to:"manabi"

  },
  {
    id:7,
    number:7,
    code:"61116",
    capacity:23,
    from:"israel",
    to:"manabi"

  },
  {
    id:8,
    number:8,
    code:"3616516",
    capacity:23,
    from:"israel",
    to:"manabi"

  },
  {
    id:9,
    number:9,
    code:"3166323",
    capacity:23,
    from:"israel",
    to:"manabi"

  },
  {
    id:10,
    number:10,
    code:"25465156",
    capacity:23,
    from:"israel",
    to:"manabi"

  },
]

constructor(private flight:ClienteService){

}
crear(body:any){

  this.flight.ingresarCliente(body).pipe(
    tap(data=>{
      this.flight = data
    }),catchError(e =>{

      throw e
    }

    )
  ).subscribe()
}
deleteFlight(index: number, body:any) {
  this.arreglo.splice(index, 1); 
  console.log(body);
  
  this.crear(body)
}
// eliminar(){
//   const id = parseInt(this.bus.id)
//   this.bus.id = id
//   console.log(this.bus);
  
  
//   this.buss.eliminarCliente(this.bus).pipe(
//     tap(data =>{

//       console.log(data);
      
//     }), 
//     catchError(e=>{

//       throw e
//     })
//   ).subscribe()
// }
}
