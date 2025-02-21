package com.mx.Responsables.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "RESPONSABLES")

public class Responsables {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_RESPONSABLE_ID")
	@SequenceGenerator(name = "SEQ_RESPONSABLE_ID", sequenceName = "SEQ_RESPONSABLE_ID", allocationSize = 1)
	private Long idResponsable; 
	private String nombre; 
	private Long contacto; 
	private Long veterinariaId;

}
