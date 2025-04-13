import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Router } from '@angular/router';
import { Mascotas } from '../../../Entitys/Mascotas';
import Swal from 'sweetalert2';
import { Clientes } from '../../../Entitys/Clientes';
import { Responsables } from '../../../Entitys/Responsables';
import { Veterinaria } from '../../../Entitys/Veterinaria';

@Component({
  selector: 'app-eliminar-m',
  imports: [FormsModule],
  templateUrl: './eliminar-m.component.html',
  styleUrl: './eliminar-m.component.css'
})
export class EliminarMComponent implements OnInit{

  constructor(private service: VeterinariaWSService, private router: Router){}

  ngOnInit(): void {
    this.buscarMascota();
    this.obtenerClientes();
    this.obtenerResponsables();
    this.obtenerVeterinarias();
  }

  mascota : Mascotas = new Mascotas();
  clientes !: Clientes[];
  responsables !: Responsables[];
  veterinarias !: Veterinaria[];

  obtenerClientes(){
    this.service.listarClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  obtenerResponsables(){
    this.service.listarResponsables().subscribe(data => {
      this.responsables = data;
    });
  }

  obtenerVeterinarias(){
    this.service.listarVeterinarias().subscribe(data => {
      this.veterinarias = data;
    });
  }

  buscarMascota() {
    const idvet = sessionStorage.getItem('id');


    this.mascota.idMascota = Number(idvet);
    //Consultar la informacion en la base de datos
    this.service.buscarMascota(this.mascota.idMascota).subscribe({
      next: data => {
        this.mascota = data;

         Swal.fire({
                              title: "Ok",
                              text: "Informacion recuperada",
                              icon: "info"
                            });
              },
              error: errorBuscar => {
                Swal.fire({
                  title: "Error",
                  text: "Error al consultar la informacion",
                  icon: "error"
                });
      }
    });
  }

  
  eliminar(){

    Swal.fire({
      title: "¿Estas seguro de eliminar esta informacion?",
      text: "Despues de eliminar la informacion no podras revertir los cambios!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si"
    }).then((result) => {
      if (result.isConfirmed) {

        this.service.eliminarMascota(this.mascota.idMascota).subscribe( 
          data => {

            Swal.fire({
              title: "Correcto!",
              text: "Eliminado correctamente",
              icon: "success"
            });
            this.router.navigate(['listarMascotas']);
          }
    
        );
        
      }
    });
  }
}
