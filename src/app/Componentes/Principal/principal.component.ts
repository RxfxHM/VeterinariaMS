import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal',
  imports: [RouterOutlet],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  title = 'VeterinariasFront';

  constructor(private router: Router){}

  listarVeterinarias(){
    this.router.navigate(['listarVeterinarias']);
  }

  listarResponsables(){
    this.router.navigate(['listarResponsables']);
  }

  listarMascotas(){
    this.router.navigate(['listarMascotas']);
  }

  listarClientes(){
    this.router.navigate(['listarClientes']);
  }

  nuevaVeterinaria(){
    this.router.navigate(['guardarVeterinarias']);
  }

  nuevaMascota(){
    this.router.navigate(['guardarMascotas']);
  }

  nuevoResponsable(){
    this.router.navigate(['guardarResponsables']);
  }

  nuevoCliente(){
    this.router.navigate(['guardarClientes']);
  }

}
