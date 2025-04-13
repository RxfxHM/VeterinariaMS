import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Veterinaria } from '../../../Entitys/Veterinaria';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-v',
  imports: [FormsModule],
  templateUrl: './editar-v.component.html',
  styleUrl: './editar-v.component.css'
})
export class EditarVComponent implements OnInit{

  constructor(private router: Router, private service: VeterinariaWSService){}

  ngOnInit(): void {
    this.buscarVeterinaria();
  }

  veterinaria: Veterinaria = new Veterinaria();

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
  
          this.service.editarVeterinaria(this.veterinaria).subscribe( 
            data => {
  
              Swal.fire({
                title: "Correcto!",
                text: "Editado orrectamente",
                icon: "success"
              });
              this.router.navigate(['listarVeterinarias']);
            }
            
      
          );
          
        }
      });
    }
}
