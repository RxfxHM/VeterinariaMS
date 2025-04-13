import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Veterinaria } from '../../../Entitys/Veterinaria';


@Component({
  selector: 'app-listar-v',
  imports: [FormsModule],
  templateUrl: './listar-v.component.html',
  styleUrl: './listar-v.component.css'
})
export class ListarVComponent implements OnInit{

  constructor(private router:Router, private service: VeterinariaWSService){}

  ngOnInit(): void {
    this.listarVeterinarias();
  }

  veterinarias !: Veterinaria[];

  veterinaria : Veterinaria = new Veterinaria();

  listarVeterinarias(){
    this.service.listarVeterinarias().subscribe({
      next: data =>{
        this.veterinarias = data;
      },
      error: err =>{
        console.log("Ocurrio un error al obtener la informacion" +  err)
      }
    });
  }

  editar(veterinaria: Veterinaria){
    sessionStorage.setItem('id', veterinaria.idVeterinaria.toString());
    this.router.navigate(['editarVeterinarias']);

  }


  eliminar(veterinaria: number){
    sessionStorage.setItem('id', veterinaria.toString());
    this.router.navigate(['eliminarVeterinarias']);
  }

  buscarPorId(){
    const idvet = sessionStorage.getItem('id');


    this.veterinaria.idVeterinaria = Number(idvet);
    this.service.buscarVeterinaria(this.veterinaria.idVeterinaria).subscribe(data => {
      this.veterinaria = data;
    });
  }

  detalle(veterinaria: Veterinaria){
    sessionStorage.setItem('id',veterinaria.idVeterinaria.toString());
    this.router.navigate(['detalleVeterinaria']);
  }

}
