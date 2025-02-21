package com.mx.Veterinarias.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table
@Data
public class Veterinarias {
	
	@Id
	private Long idVeterinaria;
	private String nombre;
	private String direccion;
	private Long telefono;

}
