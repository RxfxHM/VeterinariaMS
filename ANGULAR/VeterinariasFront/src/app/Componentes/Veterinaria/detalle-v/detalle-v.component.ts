import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Responsables } from '../../../Entitys/Responsables';
import Swal from 'sweetalert2';
import { Veterinaria } from '../../../Entitys/Veterinaria';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-v',
  imports: [CommonModule],
  templateUrl: './detalle-v.component.html',
  styleUrl: './detalle-v.component.css'
})
export class DetalleVComponent implements OnInit{

  constructor(private router: Router, private service: VeterinariaWSService){}

  ngOnInit(): void {
    this.detalle();
  }

  responsables !: Responsables[];

  veterinaria : Veterinaria = new Veterinaria();

  detalle(){
    const num = sessionStorage.getItem('id');

    this.service.buscarVeterinaria(Number(num)).subscribe({
      next: veterinaria =>{
        this.service.obtenerResponsablesPorVeterinaria(veterinaria).subscribe({
          next: (data: Responsables[]) =>  {
            console.log(JSON.stringify(veterinaria));
            this.responsables = data;
              
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
                                                text: "No contiene Responsables",
                                                icon: "error"
                                              });
                                              this.router.navigate(['listarVeterinarias']);
                                    }
          })

      }
    })
    
  }
}
