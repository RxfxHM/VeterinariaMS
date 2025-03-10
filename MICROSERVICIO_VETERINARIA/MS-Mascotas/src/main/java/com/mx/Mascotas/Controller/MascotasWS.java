package com.mx.Mascotas.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mx.Mascotas.Entity.Mascotas;
import com.mx.Mascotas.Service.MascotasServiceImp;

@RestController
@RequestMapping("/mascotas")
@CrossOrigin
public class MascotasWS {

	//Inyeccion de dependencias
	@Autowired
	private MascotasServiceImp service;
	
	//guardar
	//http://localhost:8003/mascotas/guardar
	@PostMapping("/guardar")
	public ResponseEntity<?> guardar(@RequestBody Mascotas mascota){
		Mascotas aux = service.guardarMascota(mascota);
		if(aux == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}else {
			return ResponseEntity.status(HttpStatus.OK).body(aux);
		}
	}
	
	//listar
	//http://localhost:8003/mascotas/listar
	@GetMapping("/listar")
	private ResponseEntity<List<Mascotas>> listar(){
		List<Mascotas> aux = service.listarMascotas();
		if(aux == null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}else {
			return ResponseEntity.status(HttpStatus.OK).body(aux);
		}
	}
	
	//editar
	//http://localhost:8003/mascotas/editar
	@PutMapping("/editar")
	public ResponseEntity<?> editar(@RequestBody Mascotas mascota){
		Mascotas aux = service.editarMascota(mascota);
		if(aux == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}else {
			return ResponseEntity.status(HttpStatus.OK).body(aux);
		}
	}
	
	//eliminar
	//http://localhost:8003/mascotas/eliminar
	@DeleteMapping("/eliminar/{idMascota}")
	public ResponseEntity<?> eliminar(@PathVariable Long idMascota){
		Mascotas mascotaaux = service.eliminarMascota(idMascota);
		if(mascotaaux == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}else {
			return ResponseEntity.status(HttpStatus.OK).body(mascotaaux);
		}
	}
	
	//buscar
	//http://localhost:8002/mascotas/buscar
	@GetMapping("/buscar/{idMascota}")
	public ResponseEntity<?> buscar(@PathVariable Long idMascota){
		Mascotas aux = service.buscarMascota(idMascota);
		if(aux == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}else {
			return ResponseEntity.status(HttpStatus.OK).body(aux);
		}
		
	}
	
	//Buscar por veterinaria
	@PostMapping("/veterinarias/{veterinariaId}")
	public ResponseEntity<List<Mascotas>> obtenerPorVeterinariaId(@PathVariable Long veterinariaId){
		return ResponseEntity.status(HttpStatus.OK).body(service.getByVeterinariaId(veterinariaId));
	}
	
	
	
}
