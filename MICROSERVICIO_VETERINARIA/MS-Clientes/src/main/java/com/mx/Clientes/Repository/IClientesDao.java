package com.mx.Clientes.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mx.Clientes.Entity.Clientes;

public interface IClientesDao extends JpaRepository<Clientes, Long>{
	
	//public List<Clientes> findByVeterinariaId(Long veterinariaId);

}
