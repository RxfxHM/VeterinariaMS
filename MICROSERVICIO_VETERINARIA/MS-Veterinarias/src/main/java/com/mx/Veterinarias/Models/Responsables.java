package com.mx.Veterinarias.Models;

import lombok.Data;


@Data
public class Responsables {


	private Long idResponsable;
	private String nombre;
	private Long contacto;
	private Long veterinariaId;
	
}