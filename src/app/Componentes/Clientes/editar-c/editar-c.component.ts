import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Clientes } from '../../../Entitys/Clientes';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-c',
  imports: [FormsModule],
  templateUrl: './editar-c.component.html',
  styleUrl: './editar-c.component.css'
})
export class EditarCComponent implements OnInit{

  constructor(private router: Router, private service: VeterinariaWSService){}

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
  
          this.service.editarClientes(this.cliente).subscribe( 
            data => {
  
              Swal.fire({
                title: "Correcto!",
                text: "Editado orrectamente",
                icon: "success"
              });
              this.router.navigate(['listarClientes']);
            }
      
          );
          
        }
      });
    }
}
