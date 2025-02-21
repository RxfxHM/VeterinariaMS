package com.mx.Veterinarias.Models;

import lombok.Data;


@Data
public class Clientes {

	private Long idCliente;
	private String nombre;
	private String direccion;
	private Long contacto;
}