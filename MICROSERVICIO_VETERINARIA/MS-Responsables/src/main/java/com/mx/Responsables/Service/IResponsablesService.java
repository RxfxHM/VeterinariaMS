package com.mx.Responsables.Service;

import java.util.List;

import com.mx.Responsables.Entity.Responsables;

public interface IResponsablesService {

	public Responsables guardarResponsable(Responsables responsable);
	
	public List<Responsables> listarResponsables();
	
	public Responsables editarResponsable(Responsables responsable);
	
	public Responsables eliminarResponsables(Long idResponsable);
	
	public Responsables buscarResponsable(Long idResponsable);
}
