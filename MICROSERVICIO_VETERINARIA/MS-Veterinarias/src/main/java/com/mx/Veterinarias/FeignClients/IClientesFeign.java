package com.mx.Veterinarias.FeignClients;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.mx.Veterinarias.Models.Clientes;


@FeignClient(name = "MS-Clientes", url = "http://localhost:8004", path = "/clientes")
public interface IClientesFeign {

	//guardar
	//http://localhost:8004/clientes/guardar
	@PostMapping(path = "guardar")
	public Clientes guardar(@RequestBody Clientes cliente);
	
	//editar
	//http://localhost:8004/clientes/editar
	@PostMapping("/editar")
	public Clientes editar(@RequestBody Clientes cliente);
	
	//eliminar
	//http://localhost:8004/clientes/eliminar
	@DeleteMapping("/eliminar/{idMascota}")
	public Clientes eliminar(@PathVariable Long idCliente);
	
	//buscar
	//http://localhost:8004/clientes/buscar
	@GetMapping("/buscar/{idCliente}")
	public Clientes buscar(@PathVariable Long idCliente);
	
	//Buscar por veterinaria
	/*@PostMapping("veterinarias/{veterinariaId}")
	public List<Clientes> obtenerPorVeterinariaId(@PathVariable Long veterinariId);*/
}
