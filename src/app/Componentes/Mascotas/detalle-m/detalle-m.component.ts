import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MascotaDetalle } from '../../../Entitys/MascotaDetalle';
import { Route, Router } from '@angular/router';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Mascotas } from '../../../Entitys/Mascotas';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-m',
  imports: [CommonModule],
  templateUrl: './detalle-m.component.html',
  styleUrl: './detalle-m.component.css'
})
export class DetalleMComponent implements OnInit{

  constructor(private router: Router, private service: VeterinariaWSService){}
  
    ngOnInit(): void {
      this.detalle();
    }
  
    mascotaDetalle !: MascotaDetalle;
  
    mascota : Mascotas = new Mascotas();
  
    detalle(){
      const num = sessionStorage.getItem('id');
      
      console.log('Enviando mascota:', JSON.stringify(Number(num)));
      this.service.buscarMascota(Number(num)).subscribe({
      next: mascotaCompleta => {
        this.service.obtenerResponsablesVeterinariaClientesPorMascotas(mascotaCompleta).subscribe({
          next: data =>  {
            this.mascotaDetalle = data;
            console.log('INFORMACION:', JSON.stringify(this.mascotaDetalle));
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
                                                text: "No contiene informacion",
                                                icon: "error"
                                              });
                                              this.router.navigate(['listarMascotas']);
                                    }
          })
        
      }
    })
      
    }
    
    
}
