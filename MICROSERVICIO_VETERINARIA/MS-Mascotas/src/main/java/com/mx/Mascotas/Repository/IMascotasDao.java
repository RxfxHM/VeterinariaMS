package com.mx.Mascotas.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mx.Mascotas.Entity.Mascotas;


public interface IMascotasDao extends JpaRepository<Mascotas, Long>{

	public List<Mascotas> findByVeterinariaId(Long veterinariaId);
}
