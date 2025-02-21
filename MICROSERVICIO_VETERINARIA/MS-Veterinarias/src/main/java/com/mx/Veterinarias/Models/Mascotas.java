package com.mx.Veterinarias.Models;

import lombok.Data;


@Data
public class Mascotas {

	
	private Long idMascota;
	private String nombre;
	private String raza;
	private int edad;
	private String razonCita;
	private Long clienteId;
	private Long responsableId;
	private Long veterinariaId;
}
