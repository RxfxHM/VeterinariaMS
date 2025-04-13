import { Component, OnInit } from '@angular/core';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Router } from '@angular/router';
import { Veterinaria } from '../../../Entitys/Veterinaria';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eliminar-v',
  imports: [FormsModule],
  templateUrl: './eliminar-v.component.html',
  styleUrl: './eliminar-v.component.css'
})
export class EliminarVComponent  implements OnInit{

  constructor(private service: VeterinariaWSService, private router: Router){}

  ngOnInit(): void {
    this.buscarVeterinaria();
  }

  veterinaria : Veterinaria = new Veterinaria();

  buscarVeterinaria() {
    const idvet = sessionStorage.getItem('id');


    this.veterinaria.idVeterinaria = Number(idvet);
    //Consultar la informacion en la base de datos
    this.service.buscarVeterinaria(this.veterinaria.idVeterinaria).subscribe({
      next: data => {
        this.veterinaria = data;

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

        this.service.eliminarVeterinaria(this.veterinaria.idVeterinaria).subscribe( 
          data => {

            Swal.fire({
              title: "Correcto!",
              text: "Eliminado correctamente",
              icon: "success"
            });
            this.router.navigate(['listarVeterinarias']);
          }
    
        );
        
      }
    });
  }

}
