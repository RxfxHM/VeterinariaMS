package com.mx.Veterinarias.Service;

import java.util.List;

import com.mx.Veterinarias.Entity.Veterinarias;



public interface IVeterinariasService {
	
	public Veterinarias guardarVeterinaria(Veterinarias veterinaria);
	
	public List<Veterinarias> listarVeterinarias();
	
	public Veterinarias editarVterinarias(Veterinarias veterinaria);
	
	public Veterinarias eliminarVeterinaria(Long idVeterinaria);
	
	public Veterinarias buscarVeterinaria(Long idVeterinaria);

}
