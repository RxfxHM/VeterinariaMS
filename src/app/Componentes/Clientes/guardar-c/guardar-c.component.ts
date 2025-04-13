import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Clientes } from '../../../Entitys/Clientes';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guardar-c',
  imports: [FormsModule],
  templateUrl: './guardar-c.component.html',
  styleUrl: './guardar-c.component.css'
})
export class GuardarCComponent {

  constructor(private router: Router, private service: VeterinariaWSService){}

  cliente : Clientes = new Clientes();
  
  guardarCliente(){
    this.service.guardarClientes(this.cliente).subscribe({

      next: data=>{
        console.log("Se guardo correctamente: " + JSON.stringify(data));

        Swal.fire({
          title: "Ok",
          text: "Se guardo correctamente",
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        });

        this.router.navigate(['listarClientes']);
      },
      error: errorGuardar => {
        if(errorGuardar.status === 409){
          console.log("Ocurrio un error al guardar: " + JSON.stringify(errorGuardar));
          Swal.fire({
            title: "Error!",
            text: "Ya se encuentra registrado el cliente " + this.cliente.nombre + " con la direccion " + this.cliente.direccion,
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
