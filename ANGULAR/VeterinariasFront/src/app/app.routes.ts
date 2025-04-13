import { Routes } from '@angular/router';

import { ListarVComponent } from './Componentes/Veterinaria/listar-v/listar-v.component';
import { GuardarVComponent } from './Componentes/Veterinaria/guardar-v/guardar-v.component';
import { EliminarVComponent } from './Componentes/Veterinaria/eliminar-v/eliminar-v.component';
import { EditarVComponent } from './Componentes/Veterinaria/editar-v/editar-v.component';
import { ListarRComponent } from './Componentes/Responsables/listar-r/listar-r.component';
import { GuardarRComponent } from './Componentes/Responsables/guardar-r/guardar-r.component';
import { EliminarRComponent } from './Componentes/Responsables/eliminar-r/eliminar-r.component';
import { EditarRComponent } from './Componentes/Responsables/editar-r/editar-r.component';
import { ListarMComponent } from './Componentes/Mascotas/listar-m/listar-m.component';
import { GuardarMComponent } from './Componentes/Mascotas/guardar-m/guardar-m.component';
import { EliminarMComponent } from './Componentes/Mascotas/eliminar-m/eliminar-m.component';
import { EditarMComponent } from './Componentes/Mascotas/editar-m/editar-m.component';
import { ListarCComponent } from './Componentes/Clientes/listar-c/listar-c.component';
import { GuardarCComponent } from './Componentes/Clientes/guardar-c/guardar-c.component';
import { EliminarCComponent } from './Componentes/Clientes/eliminar-c/eliminar-c.component';
import { EditarCComponent } from './Componentes/Clientes/editar-c/editar-c.component';
import { DetalleVComponent } from './Componentes/Veterinaria/detalle-v/detalle-v.component';
import { DetalleRComponent } from './Componentes/Responsables/detalle-r/detalle-r.component';
import { DetalleMComponent } from './Componentes/Mascotas/detalle-m/detalle-m.component';
import { DetalleComponent } from './Componentes/Clientes/detalle-c/detalle.component';

export const routes: Routes = [

    //PATH de Veterinarias
    {path: 'listarVeterinarias', component: ListarVComponent},
    {path: 'guardarVeterinarias', component: GuardarVComponent},
    {path: 'eliminarVeterinarias', component: EliminarVComponent},
    {path: 'editarVeterinarias', component: EditarVComponent},
    //PATH de Responsables
    {path: 'listarResponsables', component: ListarRComponent},
    {path: 'guardarResponsables', component: GuardarRComponent},
    {path: 'eliminarResponsables', component: EliminarRComponent},
    {path: 'editarResponsables', component: EditarRComponent},
    //PATH de Mascotas
    {path: 'listarMascotas', component: ListarMComponent},
    {path: 'guardarMascotas', component: GuardarMComponent},
    {path: 'eliminarMascotas', component: EliminarMComponent},
    {path: 'editarMascotas', component: EditarMComponent},
    //PATH de Clientes
    {path: 'listarClientes', component: ListarCComponent},
    {path: 'guardarClientes', component: GuardarCComponent},
    {path: 'eliminarClientes', component: EliminarCComponent},
    {path: 'editarClientes', component: EditarCComponent},

    //Path para detalles de cada microservicio
    {path: 'detalleVeterinaria', component: DetalleVComponent},
    {path: 'detalleResponsable', component: DetalleRComponent},
    {path: 'detalleMascota', component: DetalleMComponent},
    {path: 'detalleCliente', component: DetalleComponent},

];
