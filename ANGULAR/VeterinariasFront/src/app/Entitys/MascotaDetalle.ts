import { Clientes } from "./Clientes";
import { Responsables } from "./Responsables";
import { Veterinaria } from "./Veterinaria";

export class MascotaDetalle{
    responsable?: {
        idResponsable?: number;
        nombre?: string;
        contacto?: number;
        veterinariaId?: number;
      };
      cliente?: {
        idCliente?: number;
        nombre?: string;
        direccion?: string;
        contacto?: number;
      };
      veterinaria?: {
        idVeterinaria?: number;
        nombre?: string;
        direccion?: string;
        telefono?: number;
      };
}