package com.mx.ApiGateway.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mx.ApiGateway.Entity.Usuarios;

public interface IUsuariosRepository extends JpaRepository<Usuarios, String>{
	
	Optional<Usuarios> findByUsuario(String usuario);

}
