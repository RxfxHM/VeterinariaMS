package com.mx.Responsables.Controller;

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

import com.mx.Responsables.Entity.Responsables;
import com.mx.Responsables.Model.Mascotas;
import com.mx.Responsables.Model.Veterinaria;
import com.mx.Responsables.Service.ResponsablesServiceImp;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping ("/responsables")
@Tag(name = "Responsables", description = "Gestion de Responsables")
public class ResponsablesWS {

	//Inyeccion de dependencias
	@Autowired
	private ResponsablesServiceImp service;
	
	
	//Endpoints
	//Guardar
	//http://localhost:8002/Responsables/listar
	@GetMapping("/listar")
	@Operation(summary = "EndPoint para listar todos los responsables",
				description = "Recupera toda la informacion de la base de datos de los"
						+ " responsables y los lista")
	public ResponseEntity<List<Responsables>> listar(){
		List<Responsables> list = service.listarResponsables();
		if(list.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}else {
			return ResponseEntity.status(HttpStatus.OK).body(list);
		}
	}
	
	
	//guardar
	//http://localhost:8002/Responsables/guardar
	@PostMapping("/guardar")
	@Operation(summary = "EndPoint para guardar un objeto Responsable",
				description = "Permite guardar todos los datos de un objeto Responsable a la base de datos")
	public ResponseEntity<?> guardar(@RequestBody Responsables responsable){
		if(service.validacion(responsable.getNombre(), responsable.getVeterinariaId())) {
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}
		Responsables responsableaux = service.guardarResponsable(responsable);
		if(responsableaux == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}else {
			return ResponseEntity.ok(responsableaux);
		}
	}
	
	//editar
	//http://localhost:8002/Responsables/editar
	@PutMapping("/editar")
	@Operation(summary = "EndPoint para editar un objeto Responsable",
				description = "Recupera los datos de un Responsable con su ID y permite modificarlo")
	public ResponseEntity<?> editar(@RequestBody Responsables responsable){
		Responsables respon = service.editarResponsable(responsable);
		if(respon == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}else{
			return ResponseEntity.status(HttpStatus.OK).body(respon);
		}
	}
	
	//eliminar
	//http://localhost:8002/Responsables/eliminar/{}
	@DeleteMapping("/eliminar/{idResponsable}")
	@Operation(summary = "EndPoint para eliminar un objeto Responsable",
				description = "Recibe un ID de Responbable y elimina los datos de la base de datos")
	public ResponseEntity<?> eliminar(@PathVariable Long idResponsable){
		Responsables respon = service.eliminarResponsables(idResponsable);
		if(respon == null) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}else {
			return ResponseEntity.status(HttpStatus.OK).body(respon);
		}
	}
	
	//buscar
	//http://localhost:8002/Responsables/buscar
	@GetMapping("/buscar/{idResponsable}")
	@Operation(summary = "EndPoint para buscar un Responsable",
				description = "Recibe un ID de Responsable y recupera la informacion de la base de datos")
	public ResponseEntity<?> buscar(@PathVariable Long idResponsable){
		Responsables respo = service.buscarResponsable(idResponsable);
		if(respo == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}else {
			return ResponseEntity.status(HttpStatus.OK).body(respo);
		}
		
	}
	
	//Buscar responsables por veterinaria
	@GetMapping("/veterinaria/{veterinariaId}")
	@Operation(summary = "EndPoint de Responsables por Veterinaria",
				description = "Recibe un ID de veterinaria y recupera la informacion de los responsables que hayan sido registrados con esa ID de veterinaria")
	public ResponseEntity<List<Responsables>> obtenerPorVeterinariaId(@PathVariable Long veterinariaId){
		return ResponseEntity.status(HttpStatus.OK).body(service.getByVeterinariaId(veterinariaId));
	}
	
	//Buscar que mascotas tiene de responsable
	@PostMapping("/mascotas")
	@Operation(summary = "EndPoint de Mascotas por Responsable",
				description = "Recibe un objeto Responsable y recupera toda las mascotas que tiene relacionado el ID Responsable")
	public ResponseEntity<List<Mascotas>> obtenerMascotas(@RequestBody Responsables responsable){
		List<Mascotas> mascotas = service.getMascotas(responsable.getIdResponsable());
		if(mascotas.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}else {
			return ResponseEntity.status(HttpStatus.OK).body(mascotas);
		}
	}
}
