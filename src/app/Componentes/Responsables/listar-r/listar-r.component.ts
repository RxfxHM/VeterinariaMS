import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Responsables } from '../../../Entitys/Responsables';
import { formatCurrency } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Veterinaria } from '../../../Entitys/Veterinaria';

@Component({
  selector: 'app-listar-r',
  imports: [FormsModule],
  templateUrl: './listar-r.component.html',
  styleUrl: './listar-r.component.css'
})
export class ListarRComponent implements OnInit{

  constructor(private router:Router, private service: VeterinariaWSService){}
  
    ngOnInit(): void {
      this.listarResponsables();
      this.obtenerVeterinarias();
    }
  
    responsables !: Responsables[];
    responsable : Responsables = new Responsables();
    veterinarias !: Veterinaria[];

    obtenerVeterinarias(){
      this.service.listarVeterinarias().subscribe(data => {
        this.veterinarias = data;
      });
    }

    obtenerNombreVeterinaria(veterinariaId: number): String {
      const veterinaria = this.veterinarias.find(v => v.idVeterinaria === veterinariaId);
      if(veterinaria){
        return `${veterinaria.nombre} - ${veterinaria.direccion}`;
      }
      return 'Sin veterinaria';
    }
  
    listarResponsables(){
      console.log(this.responsables);
      this.service.listarResponsables().subscribe({
        next: data =>{
          this.responsables = data;
        },
        error: err =>{
          console.log("Ocurrio un error al obtener la informacion" +  err)
        }
      });
    }
  
    editar(responsable: Responsables){
      sessionStorage.setItem('id', responsable.idResponsable.toString());
      this.router.navigate(['editarResponsables']);
  
    }
  
  
    eliminar(Idresponsable: number){
      sessionStorage.setItem('id', Idresponsable.toString());
      this.router.navigate(['eliminarResponsables']);
    }

    detalle(responsable: Responsables){
      sessionStorage.setItem('id', responsable.idResponsable.toString());
      this.router.navigate(['detalleResponsable']);
    }
  
    

}
