import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Mascotas } from '../../../Entitys/Mascotas';
import Swal from 'sweetalert2';
import { Clientes } from '../../../Entitys/Clientes';
import { Responsables } from '../../../Entitys/Responsables';
import { Veterinaria } from '../../../Entitys/Veterinaria';

@Component({
  selector: 'app-guardar-m',
  imports: [FormsModule],
  templateUrl: './guardar-m.component.html',
  styleUrl: './guardar-m.component.css'
})
export class GuardarMComponent implements OnInit{

  constructor(private router: Router, private service: VeterinariaWSService){}

  ngOnInit(): void {
    this.obtenerClientes();
    this.obtenerResponsables();
    this.obtenerVeterinarias();
  }

  clientes !: Clientes[];
  responsables !: Responsables[];
  veterinarias !: Veterinaria[];
  mascota : Mascotas = new Mascotas();

  obtenerClientes(){
    this.service.listarClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  obtenerResponsables(){
    this.service.listarResponsables().subscribe(data => {
      this.responsables = data;
    });
  }

  obtenerVeterinarias(){
    this.service.listarVeterinarias().subscribe(data => {
      this.veterinarias = data;
    });
  }
  
  guardarMascota(){
    this.service.guardarMascota(this.mascota).subscribe({

      next: data=>{
        console.log("Se guardo correctamente: " + JSON.stringify(data));

        Swal.fire({
          title: "Ok",
          text: "Se guardo correctamente",
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        });

        this.router.navigate(['listarMascotas']);
      },
      error: errorGuardar => {
        console.log("Ocurrio un error al guardar: " + JSON.stringify(errorGuardar));
        Swal.fire({
          title: "Error!",
          text: "Ocurrio un error al guardar",
          icon: "error"
        });
      }
    });
  }
  
}
