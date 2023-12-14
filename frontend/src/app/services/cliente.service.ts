import { Injectable } from '@angular/core';
import { url } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente} from '../interfaces/cliente'
import { ClienteResponse } from '../interfaces/clienteResponse';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  ingresarCliente(body:any): Observable<ClienteResponse>{
    return this.http.post<ClienteResponse>(`${url}crear/bus`,body);
  }

  obtenerClientes(body:any):Observable<any>{
    return this.http.get<any>(`${url}ver/bus`,body)
  }



  eliminarCliente(body:any):Observable<any>{
    return this.http.delete<any>(`${url}eliminar/bus`,body)
  }

}
