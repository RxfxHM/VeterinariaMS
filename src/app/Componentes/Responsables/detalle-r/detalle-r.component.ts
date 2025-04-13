import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Mascotas } from '../../../Entitys/Mascotas';
import { Responsables } from '../../../Entitys/Responsables';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-r',
  imports: [CommonModule],
  templateUrl: './detalle-r.component.html',
  styleUrl: './detalle-r.component.css'
})
export class DetalleRComponent implements OnInit{

constructor(private router: Router, private service: VeterinariaWSService){}

  ngOnInit(): void {
    this.detalle();
  }

  mascotas !: Mascotas[];

  responsable : Responsables = new Responsables();

  detalle(){
    const num = sessionStorage.getItem('id');
    this.service.buscarResponsables(Number(num)).subscribe({
      next:  responsable =>{
        this.service.obtenerMascotasPorResponsable(responsable).subscribe({
          next: (data: Mascotas[]) =>  {
            console.log(JSON.stringify(responsable))
            this.mascotas = data;
              
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
                                                text: "No tiene Mascotas",
                                                icon: "error"
                                              });
                                              this.router.navigate(['listarResponsables']);
                                    }
          })

      }
    });
    
  }
}
