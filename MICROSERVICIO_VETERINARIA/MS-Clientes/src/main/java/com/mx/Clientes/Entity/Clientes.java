package com.mx.Clientes.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table
@Data
public class Clientes {

	@Id
	private Long idCliente;
	private String nombre;
	private String direccion;
	private Long contacto;
}
