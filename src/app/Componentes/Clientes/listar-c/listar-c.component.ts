import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VeterinariaWSService } from '../../../Servicios/veterinaria-ws.service';
import { Clientes } from '../../../Entitys/Clientes';

@Component({
  selector: 'app-listar-c',
  imports: [FormsModule],
  templateUrl: './listar-c.component.html',
  styleUrl: './listar-c.component.css'
})
export class ListarCComponent implements OnInit{

  constructor(private router:Router, private service: VeterinariaWSService){}

  ngOnInit(): void {
    this.listarClientes();
  }

  clientes !: Clientes[];

  cliente : Clientes = new Clientes();

  listarClientes(){
    this.service.listarClientes().subscribe({
      next: data =>{
        this.clientes = data;
      },
      error: err =>{
        console.log("Ocurrio un error al obtener la informacion" +  err)
      }
    });
  }

  editar(cliente: Clientes){
    sessionStorage.setItem('id', cliente.idCliente.toString());
    this.router.navigate(['editarClientes']);

  }


  eliminar(cliente: number){
    sessionStorage.setItem('id', cliente.toString());
    this.router.navigate(['eliminarClientes']);
  }

  detalle(cliente: Clientes){
    sessionStorage.setItem('id',cliente.idCliente.toString());
    this.router.navigate(['detalleCliente']);
  }
  
}
