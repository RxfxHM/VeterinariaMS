package com.mx.Mascotas.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table
@Data
public class Mascotas {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_MASCOTA_ID")
	@SequenceGenerator(name = "SEQ_MASCOTA_ID", sequenceName = "SEQ_MASCOTA_ID", allocationSize = 1)
	private Long idMascota;
	private String nombre;
	private String raza;
	private int edad;
	private String razonCita;
	private Long clienteId;
	private Long responsableId;
	private Long veterinariaId;
}
