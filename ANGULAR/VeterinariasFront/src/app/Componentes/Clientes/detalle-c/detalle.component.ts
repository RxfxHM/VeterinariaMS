import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Clientes } from '../../../Entitys/Clientes';
import { Mascotas } from '../../../Entitys/Mascotas';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle',
  imports: [CommonModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit{

  constructor(private router: Router, private service: VeterinariaWSService){}

  ngOnInit(): void {
      this.detalle();
    }
  
    mascotas !: Mascotas[];
  
    cliente : Clientes = new Clientes();
  
    detalle(){
      const num = sessionStorage.getItem('id');

      this.service.buscarClientes(Number(num)).subscribe({
        next: cliente => {
          this.service.obtenerMascotasPorCliente(cliente).subscribe({
            next: (data: Mascotas[]) =>  {
              this.mascotas = data;
                console.log(JSON.stringify(cliente));
                         Swal.fire({
                                   title: "Ok",
                                   text: "Informacion Recuperada",
                                   icon: "success",
                                   timer: 1500,
                                   showConfirmButton: false
                                 });
                              },
                              error: errorBuscar => {
                                                Swal.fire({
                                                  title: "Error",
                                                  text: "No tiene Mascotas en Veterinaria",
                                                  icon: "error"
                                                });
                                                this.router.navigate(['listarClientes']);
                                      }
            })

        }
      });

      
    }
}
