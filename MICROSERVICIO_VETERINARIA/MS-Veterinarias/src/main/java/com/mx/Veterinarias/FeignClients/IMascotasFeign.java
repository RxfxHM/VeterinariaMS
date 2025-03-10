package com.mx.Veterinarias.FeignClients;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.mx.Veterinarias.Models.Mascotas;

@FeignClient(name="MS-Mascotas", url = "http://localhost:8003", path = "/mascotas")
public interface IMascotasFeign {

	//guardar
		//http://localhost:8003/mascotas/guardar
		@PostMapping("/guardar")
		public Mascotas guardar(@RequestBody Mascotas mascota);
		
		//editar
		//http://localhost:8003/mascotas/editar
		@PostMapping("/editar")
		public Mascotas editar(@RequestBody Mascotas mascota);
		
		//eliminar
		//http://localhost:8003/mascotas/eliminar
		@DeleteMapping("/eliminar/{idMascota}")
		public Mascotas eliminar(@PathVariable Long idMascota);
		
		//buscar
		//http://localhost:8002/mascotas/buscar
		@GetMapping("/buscar/{idMascota}")
		public Mascotas buscar(@PathVariable Long idMascota);
		
		//Buscar por veterinaria
		@PostMapping("/veterinarias/{veterinariaId}")
		public List<Mascotas> obtenerPorVeterinariaId(@PathVariable Long veterinariaId);
}
