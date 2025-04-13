import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Router } from '@angular/router';
import { Clientes } from '../../../Entitys/Clientes';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-c',
  imports: [FormsModule],
  templateUrl: './eliminar-c.component.html',
  styleUrl: './eliminar-c.component.css'
})
export class EliminarCComponent implements OnInit{

  constructor(private service: VeterinariaWSService, private router: Router){}

  ngOnInit(): void {
    this.buscarCliente();
  }

  cliente : Clientes = new Clientes();

  buscarCliente() {
    const idvet = sessionStorage.getItem('id');


    this.cliente.idCliente = Number(idvet);
    //Consultar la informacion en la base de datos
    this.service.buscarClientes(this.cliente.idCliente).subscribe({
      next: data => {
        this.cliente = data;

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

        this.service.eliminarClientes(this.cliente.idCliente).subscribe( 
          data => {

            Swal.fire({
              title: "Correcto!",
              text: "Eliminado correctamente",
              icon: "success"
            });
            this.router.navigate(['listarClientes']);
          }
    
        );
        
      }
    });
  }
}
