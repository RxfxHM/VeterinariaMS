package com.mx.Mascotas.Service;

import java.util.List;

import com.mx.Mascotas.Entity.Mascotas;

public interface IMascotasService {
	
	public Mascotas guardarMascota(Mascotas mascota);
	
	public List<Mascotas> listarMascotas();
	
	public Mascotas editarMascota(Mascotas mascota);
	
	public Mascotas eliminarMascota(Long idMascota);
	
	public Mascotas buscarMascota(Long idMascota);

}
