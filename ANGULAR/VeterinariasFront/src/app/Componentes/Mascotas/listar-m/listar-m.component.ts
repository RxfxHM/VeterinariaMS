import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Mascotas } from '../../../Entitys/Mascotas';
import { Clientes } from '../../../Entitys/Clientes';
import { Responsables } from '../../../Entitys/Responsables';
import { Veterinaria } from '../../../Entitys/Veterinaria';

@Component({
  selector: 'app-listar-m',
  imports: [FormsModule],
  templateUrl: './listar-m.component.html',
  styleUrl: './listar-m.component.css'
})
export class ListarMComponent implements OnInit{

  constructor(private router:Router, private service: VeterinariaWSService){}

  ngOnInit(): void {
    this.listarMascotas();
    this.obtenerClientes();
    this.obtenerResponsables();
    this.obtenerVeterinarias();
  }

  mascotas !: Mascotas[];
  clientes !: Clientes[];
  responsables !: Responsables[];
  veterinarias !: Veterinaria[];
  mascota : Mascotas = new Mascotas();

  obtenerClientes(){
    this.service.listarClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  obtenerDatosClientes(clienteId : number){
    const cliente = this.clientes.find(c => c.idCliente === clienteId);
    return cliente?.nombre || 'Sin datos del cliente';
  }

  obtenerResponsables(){
    this.service.listarResponsables().subscribe(data => {
      this.responsables = data;
    });
  }

  obtenerDatosResponsables(responsableId : number){
    const responsable = this.responsables.find(r => r.idResponsable === responsableId);
    return responsable?.nombre || 'Sin datos del responsable';
  }

  obtenerVeterinarias(){
    this.service.listarVeterinarias().subscribe(data => {
      this.veterinarias = data;
    });
  }

  obtenerDatosVeterinarias(veterinariaId : number){
    const veterinaria = this.veterinarias.find(v => v.idVeterinaria === veterinariaId);
    if(veterinaria){
      return `${veterinaria.nombre} - ${veterinaria.direccion}`;
    }
    return 'Sin datos de la veterinaria';
  }

  listarMascotas(){
    this.service.listarMascotas().subscribe({
      next: data =>{
        this.mascotas = data;
      },
      error: err =>{
        console.log("Ocurrio un error al obtener la informacion" +  err)
      }
    });
  }

  editar(mascota: Mascotas){
    sessionStorage.setItem('id', mascota.idMascota.toString());
    this.router.navigate(['editarMascotas']);

  }


  eliminar(mascota: number){
    sessionStorage.setItem('id', mascota.toString());
    this.router.navigate(['eliminarMascotas']);
  }

  detalle(mascota: Mascotas){
    sessionStorage.setItem('id', mascota.idMascota.toString());
    this.router.navigate(['detalleMascota']);
  }

  
}
