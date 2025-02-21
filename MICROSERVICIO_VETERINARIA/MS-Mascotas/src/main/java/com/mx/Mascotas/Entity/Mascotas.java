package com.mx.Mascotas.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table
@Data
public class Mascotas {

	@Id
	private Long idMascota;
	private String nombre;
	private String raza;
	private int edad;
	private String razonCita;
	private Long clienteId;
	private Long responsableId;
	private Long veterinariaId;
}
