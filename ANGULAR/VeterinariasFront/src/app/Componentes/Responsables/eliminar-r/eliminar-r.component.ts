import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Router } from '@angular/router';
import { Responsables } from '../../../Entitys/Responsables';
import Swal from 'sweetalert2';
import { Veterinaria } from '../../../Entitys/Veterinaria';

@Component({
  selector: 'app-eliminar-r',
  imports: [FormsModule],
  templateUrl: './eliminar-r.component.html',
  styleUrl: './eliminar-r.component.css'
})
export class EliminarRComponent implements OnInit{

  constructor(private service: VeterinariaWSService, private router: Router){}
  
    ngOnInit(): void {
      this.buscarResponsable();
      this.obtenerVeterinarias();
    }
  
    responsable : Responsables = new Responsables();
    veterinaria !: Veterinaria[];
    veterinariaAux : Veterinaria = new Veterinaria();

    obtenerVeterinarias(){
      this.service.listarVeterinarias().subscribe(data => {
        this.veterinaria = data;
      })
    }
  
    buscarResponsable() {
      const idvet = sessionStorage.getItem('id');
  
  
      this.responsable.idResponsable = Number(idvet);
      //Consultar la informacion en la base de datos
      this.service.buscarResponsables(this.responsable.idResponsable).subscribe({
        next: data => {
          this.responsable = data;
  
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
  
          this.service.eliminarResponsables(this.responsable.idResponsable).subscribe( 
            data => {
  
              Swal.fire({
                title: "Correcto!",
                text: "Eliminado correctamente",
                icon: "success"
              });
              this.router.navigate(['listarResponsables']);
            }
            
          );
          
        }
      });
    }
}
