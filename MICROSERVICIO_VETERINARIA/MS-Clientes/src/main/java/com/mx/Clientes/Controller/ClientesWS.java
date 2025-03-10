package com.mx.Clientes.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mx.Clientes.Entity.Clientes;
import com.mx.Clientes.Service.ClientesServiceImp;

@RestController
@RequestMapping("/clientes")
@CrossOrigin
public class ClientesWS {
	
	@Autowired
	private ClientesServiceImp service;
	
		//guardar
		//http://localhost:8004/clientes/guardar
		@PostMapping("/guardar")
		public ResponseEntity<?> guardar(@RequestBody Clientes cliente){
			Clientes aux = service.guardarCliente(cliente);
			if(aux == null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
			}else {
				return ResponseEntity.status(HttpStatus.OK).body(aux);
			}
		}
		
		//listar
		//http://localhost:8004/clientes/listar
		@GetMapping("/listar")
		private ResponseEntity<List<Clientes>> listar(){
			List<Clientes> aux = service.listarClientes();
			if(aux == null) {
				return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
			}else {
				return ResponseEntity.status(HttpStatus.OK).body(aux);
			}
		}
		
		//editar
		//http://localhost:8004/clientes/editar
		@PostMapping("/editar")
		public ResponseEntity<?> editar(@RequestBody Clientes cliente){
			Clientes aux = service.editarCliente(cliente);
			if(aux == null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
			}else {
				return ResponseEntity.status(HttpStatus.OK).body(aux);
			}
		}
		
		//eliminar
		//http://localhost:8004/clientes/eliminar
		@DeleteMapping("/eliminar/{idCliente}")
		public ResponseEntity<?> eliminar(@PathVariable Long idCliente){
			Clientes clienteaux = service.eliminarCliente(idCliente);
			if(clienteaux == null) {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			}else {
				return ResponseEntity.status(HttpStatus.OK).body(clienteaux);
			}
		}
		
		//buscar
		//http://localhost:8004/clientes/buscar
		@GetMapping("/buscar/{idCliente}")
		public ResponseEntity<?> buscar(@PathVariable Long idCliente){
			Clientes aux = service.buscarCliente(idCliente);
			if(aux == null) {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			}else {
				return ResponseEntity.status(HttpStatus.OK).body(aux);
			}
			
		}
		
		/*//Buscar por veterinaria
		@PostMapping("veterinarias/{veterinariaId}")
		public ResponseEntity<List<Clientes>> obtenerPorVeterinariaId(@PathVariable Long veterinariId){
			return ResponseEntity.status(HttpStatus.OK).body(service.getByVeterinariaId(veterinariId));
		}
		*/
		
	
		
		
		
		
		
		

}
