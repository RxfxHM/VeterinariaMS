import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Veterinaria } from '../../../Entitys/Veterinaria';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-v',
  imports: [FormsModule],
  templateUrl: './guardar-v.component.html',
  styleUrl: './guardar-v.component.css'
})
export class GuardarVComponent {

  constructor(private router: Router, private service: VeterinariaWSService){}

  veterinaria : Veterinaria = new Veterinaria();
  
  guardarVeterinaria(){
    this.service.guardarVeterinaria(this.veterinaria).subscribe({

      next: data=>{
        console.log("Se guardo correctamente: " + JSON.stringify(data));

        Swal.fire({
          title: "Ok",
          text: "Se guardo correctamente",
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        });

        this.router.navigate(['listarVeterinarias']);
      },
      error: errorGuardar => {
        if(errorGuardar.status === 409){
        console.log("Ocurrio un error al guardar: " + JSON.stringify(errorGuardar));
        Swal.fire({
          title: "Error!",
          text: "Ya se encuentra registrado el nombre " + this.veterinaria.nombre + " con la direccion " + this.veterinaria.direccion,
          icon: "error"
        });
      }
      else{
        console.log("Ocurrio un error al guardar: " + JSON.stringify(errorGuardar));
        Swal.fire({
          title: "Error!",
          text: "Ocurrio un error al guardar ",
          icon: "error"
        });
      }
      }
    });
  }

}
