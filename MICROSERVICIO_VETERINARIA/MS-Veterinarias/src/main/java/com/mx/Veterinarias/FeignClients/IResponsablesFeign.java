package com.mx.Veterinarias.FeignClients;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.mx.Veterinarias.Models.Responsables;

@FeignClient(name="MS-Responsables", url="http://localhost:8002", path="/Responsables")
public interface IResponsablesFeign {

	//Endpoints
		
		//guardar
		//http://localhost:8002/Responsables/guardar
		@PostMapping("/guardar")
		public Responsables guardar(@RequestBody Responsables responsable);
		
		//editar
		//http://localhost:8002/Responsables/editar
		@PutMapping("/editar")
		public Responsables editar(@RequestBody Responsables responsable);
		
		//eliminar
		//http://localhost:8002/Responsables/eliminar/{}
		@DeleteMapping("/eliminar/{idResponsable}")
		public Responsables eliminar(@PathVariable Long idResponsable);
		
		//buscar
		//http://localhost:8002/Responsables/buscar
		@GetMapping("/buscar/{idResponsable}")
		public Responsables buscar(@PathVariable Long idResponsable);
		
		//Buscar por veterinaria
		@PostMapping("/veterinarias/{veterinariaId}")
		public List<Responsables> obtenerPorVeterinariaId(@PathVariable Long veterinariaId);
}
