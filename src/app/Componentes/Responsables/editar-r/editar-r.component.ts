import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Responsables } from '../../../Entitys/Responsables';
import Swal from 'sweetalert2';
import { Veterinaria } from '../../../Entitys/Veterinaria';

@Component({
  selector: 'app-editar-r',
  imports: [FormsModule],
  templateUrl: './editar-r.component.html',
  styleUrl: './editar-r.component.css'
})
export class EditarRComponent implements OnInit{

  constructor(private router: Router, private service: VeterinariaWSService){}
  
    ngOnInit(): void {
      this.buscarResponsable();
      this.obtenerVeterinarias();
    }

    responsable: Responsables = new Responsables();
    veterinaria !: Veterinaria[];
    veterinariaAux : Veterinaria = new Veterinaria();
  
    obtenerVeterinarias(){
      this.service.listarVeterinarias().subscribe(data =>{
        this.veterinaria = data;
      });
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
    
            this.service.editarResponsables(this.responsable).subscribe( 
              data => {
    
                Swal.fire({
                  title: "Correcto!",
                  text: "Editado orrectamente",
                  icon: "success"
                });
                this.router.navigate(['listarResponsables']);
              }
            );
          }
        });
      }
}
