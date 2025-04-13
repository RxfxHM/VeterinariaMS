import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Responsables } from '../../../Entitys/Responsables';
import Swal from 'sweetalert2';
import { Veterinaria } from '../../../Entitys/Veterinaria';

@Component({
  selector: 'app-guardar-r',
  imports: [FormsModule],
  templateUrl: './guardar-r.component.html',
  styleUrl: './guardar-r.component.css'
})
export class GuardarRComponent implements OnInit{

  constructor(private router: Router, private service: VeterinariaWSService){}
  
  ngOnInit(): void {
    this.listaDeVeterinarias();
  }

    responsable : Responsables = new Responsables();
    veterinaria !: Veterinaria[];

    listaDeVeterinarias(){
      this.service.listarVeterinarias().subscribe(data =>{
        this.veterinaria = data;
      });
    }

    
    guardarResponsable(){
      this.service.guardarResponsables(this.responsable).subscribe({
  
        next: data=>{
          console.log("Se guardo correctamente: " + JSON.stringify(data));
  
          Swal.fire({
            title: "Ok",
            text: "Se guardo correctamente",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
          });
  
          this.router.navigate(['listarResponsables']);
        },
        error: errorGuardar => {
          if(errorGuardar.status === 409){
          console.log("Ocurrio un error al guardar: " + JSON.stringify(errorGuardar));
          Swal.fire({
            title: "Error!",
            text: "Ya se encuentra registrado el responsable " + this.responsable.nombre + " con la veterinaria " + this.responsable.veterinariaId,
            icon: "error"
          });
        }
        else{
          console.log("Ocurrio un error al guardar: " + JSON.stringify(errorGuardar));
          Swal.fire({
            title: "Error!",
            text: "Ocurrio un error al guardar",
            icon: "error"
          });
        }
        }
      });
    }
}
