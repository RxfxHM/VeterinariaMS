package com.mx.Veterinarias.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mx.Veterinarias.Entity.Veterinarias;

public interface IVeterinariasDao extends JpaRepository<Veterinarias, Long>{

	
}
