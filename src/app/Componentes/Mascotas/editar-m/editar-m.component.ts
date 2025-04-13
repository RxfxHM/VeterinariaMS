import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Mascotas } from '../../../Entitys/Mascotas';
import Swal from 'sweetalert2';
import { Clientes } from '../../../Entitys/Clientes';
import { Responsables } from '../../../Entitys/Responsables';
import { Veterinaria } from '../../../Entitys/Veterinaria';

@Component({
  selector: 'app-editar-m',
  imports: [FormsModule],
  templateUrl: './editar-m.component.html',
  styleUrl: './editar-m.component.css'
})
export class EditarMComponent implements OnInit{

  constructor(private router: Router, private service: VeterinariaWSService){}

  ngOnInit(): void {
    this.buscarMascota();
    this.obtenerClientes();
    this.obtenerResponsables();
    this.obtenerVeterinarias();
  }

  clientes !: Clientes[];
  responsables !: Responsables[];
  veterinarias !: Veterinaria[];
  clienteAux : Clientes = new Clientes();
  responsableAux : Responsables = new Responsables();
  veterinariaAux : Veterinaria = new Veterinaria();
  mascota: Mascotas = new Mascotas();

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

    editar(){

      Swal.fire({
        title: "Confirmar cambios?",
        text: "Despues de guardar no podras revertir los cambios!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, confirmar!"
      }).then((result) => {
        if (result.isConfirmed) {
  
          this.service.editarMascota(this.mascota).subscribe( 
            data => {
  
              Swal.fire({
                title: "Correcto!",
                text: "Editado orrectamente",
                icon: "success"
              });
              this.router.navigate(['listarMascotas']);
            }
      
          );
          
        }
      });
    }
}
