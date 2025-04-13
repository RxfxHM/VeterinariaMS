import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veterinaria } from '../Entitys/Veterinaria';
import { Responsables } from '../Entitys/Responsables';
import { Mascotas } from '../Entitys/Mascotas';
import { Clientes } from '../Entitys/Clientes';
import { MascotaDetalle } from '../Entitys/MascotaDetalle';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeterinariaWSService {

  url = 'http://localhost:7000'
  constructor(private http: HttpClient) { }

  //Metodo privado para manejar los errores HTTP
  private httpError(error: HttpErrorResponse){
    return throwError(() => error);
  }

  listarVeterinarias(){
    return this.http.get<Veterinaria[]>(this.url + '/veterinarias/listar');
  }

  guardarVeterinaria(veterinaria: Veterinaria){
    return this.http.post<Veterinaria>(this.url + '/veterinarias/guardar', veterinaria).pipe(
      catchError(this.httpError));
  }

  editarVeterinaria(veterinaria: Veterinaria){
    return this.http.put<Veterinaria>(this.url + '/veterinarias/editar', veterinaria)
  }

  eliminarVeterinaria(idVeterinaria: number){
    return this.http.delete<Veterinaria>(this.url + '/veterinarias/eliminar/' + idVeterinaria)
  }

  buscarVeterinaria(idVeterinaria: number){  
    return this.http.get<Veterinaria>(this.url + '/veterinarias/buscar/'+ idVeterinaria);
  }

  listarResponsables(){
    return this.http.get<Responsables[]>(this.url + '/responsables/listar');
  }

  guardarResponsables(responsables: Responsables){
    return this.http.post<Responsables>(this.url + '/responsables/guardar', responsables).pipe(
      catchError(this.httpError));
  }

  editarResponsables(responsables: Responsables){
    return this.http.put<Responsables>(this.url + '/responsables/editar', responsables);
  }

  eliminarResponsables(idResposables : number){
    return this.http.delete<Responsables>(this.url + '/responsables/eliminar/' + idResposables);
  }

  buscarResponsables(idResponsable : number){
    return this.http.get<Responsables>(this.url + '/responsables/buscar/' + idResponsable);
  }

  obtenerResponsablesPorVeterinaria(veterinaria: Veterinaria){
    return this.http.post<Responsables[]>(this.url + '/veterinarias/detalle', veterinaria);
  }

  obtenerMascotasPorResponsable(Responsable: Responsables){
    return this.http.post<Mascotas[]>(this.url + '/responsables/mascotas', Responsable);
  }

  obtenerMascotasPorCliente(cliente: Clientes){
    return this.http.post<Mascotas[]>(this.url + '/clientes/mascotas', cliente);
  }

  obtenerResponsablesVeterinariaClientesPorMascotas(mascota: Mascotas){
    return this.http.post<MascotaDetalle>(this.url + '/mascotas/detalle', mascota);
  }

  listarMascotas(){
    return this.http.get<Mascotas[]>(this.url + '/mascotas/listar');
  }

  guardarMascota(mascotas: Mascotas){
    return this.http.post<Mascotas>(this.url + '/mascotas/guardar', mascotas);
  }

  editarMascota(mascotas: Mascotas){
    return this.http.put<Mascotas>(this.url + '/mascotas/editar', mascotas);
  }

  eliminarMascota(idMascota : number){
    return this.http.delete<Mascotas>(this.url + '/mascotas/eliminar/' + idMascota);
  }

  buscarMascota(idMascota : number){
    return this.http.get<Mascotas>(this.url + '/mascotas/buscar/'+ idMascota);
  }

  obtenerMascotasDetalle(idVeterinaria: number){
    return this.http.post<Veterinaria>(this.url + '/mascotas/veterinaria/', idVeterinaria);
  }

  listarClientes(){
    return this.http.get<Clientes[]>(this.url + '/clientes/listar');
  }

  guardarClientes(clientes: Clientes){
    return this.http.post<Clientes>(this.url + '/clientes/guardar', clientes);
  }

  editarClientes(clientes: Clientes){
    return this.http.put<Clientes>(this.url + '/clientes/editar', clientes);
  }

  eliminarClientes(idCliente: number){
    return this.http.delete<Clientes>(this.url + '/clientes/eliminar/'+ idCliente);
  }

  buscarClientes(idCliente: number){
    return this.http.get<Clientes>(this.url + '/clientes/buscar/'+ idCliente);
  }

  obtenerClientesPorVeterinaria(idVeterinaria: number){
    return this.http.post<Clientes>(this.url + '/clientes/veterinaria/', idVeterinaria);
  }



}
