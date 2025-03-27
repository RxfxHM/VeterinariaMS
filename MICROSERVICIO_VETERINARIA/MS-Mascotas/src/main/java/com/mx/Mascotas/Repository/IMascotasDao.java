package com.mx.Mascotas.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mx.Mascotas.Entity.Mascotas;


public interface IMascotasDao extends JpaRepository<Mascotas, Long>{

	public List<Mascotas> findByResponsableId(Long mascotaId);
	
	public List<Mascotas> findByClienteId(Long clienteId);
}
