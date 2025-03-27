package com.mx.Mascotas.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.mx.Mascotas.Entity.Mascotas;
import com.mx.Mascotas.Models.Clientes;
import com.mx.Mascotas.Models.Responsables;
import com.mx.Mascotas.Models.Veterinaria;
import com.mx.Mascotas.Repository.IMascotasDao;


@Service
public class MascotasServiceImp implements IMascotasService{
	
	//Inyeccion de dependencias
	@Autowired
	private IMascotasDao dao;
	
	@Autowired
	private RestTemplate restTemplate;

	@Override
	public Mascotas guardarMascota(Mascotas mascota) {
		// TODO Auto-generated method stub
		return dao.save(mascota);
	}

	@Override
	public List<Mascotas> listarMascotas() {
		// TODO Auto-generated method stub
		return dao.findAll(Sort.by(Direction.ASC,"idMascota"));
	}

	@Override
	public Mascotas editarMascota(Mascotas mascota) {
		// TODO Auto-generated method stub
		return dao.save(mascota);
	}

	@Override
	public Mascotas eliminarMascota(Long idMascota) {
		// TODO Auto-generated method stub
		Mascotas aux = dao.findById(idMascota).orElse(null);
		if(aux != null) {
			dao.delete(aux);
			return aux;
		}
		return null;
	}

	@Override
	public Mascotas buscarMascota(Long idMascota) {
		// TODO Auto-generated method stub
		return dao.findById(idMascota).orElse(null);
	}
	
	public List<Mascotas> findbyResponsable(Long responsableId){
		return dao.findByResponsableId(responsableId);
	}
	
	public List<Mascotas> finbyCliente(Long clienteId){
		return dao.findByClienteId(clienteId);
	}
	
	/////////////////////////////////// RESTTEMPLATE PARA CONSULTAR AL RESPONSABLE
	//
	public Responsables findResponsables(Mascotas mascota) {
		return restTemplate.getForObject("http://localhost:8002/responsables/buscar/" + mascota.getResponsableId(),Responsables.class, mascota.getResponsableId());
	}
	
	/////////////////////////////////// RESTTEMPLATE PARA CONSULTAR AL CLIENTE
	//
	public Clientes findclientes(Mascotas mascota) {
		return restTemplate.getForObject("http://localhost:8004/clientes/buscar/"
				+ mascota.getClienteId(),Clientes.class, mascota.getClienteId());
	}
	
	/////////////////////////////////// RESTTEMPLATE PARA CONSULTAR AL CLIENTE
	//
	public Veterinaria findVeterinaria(Mascotas mascota) {
		return restTemplate.getForObject("http://localhost:8001/veterinarias/buscar/"
				+ mascota.getVeterinariaId(),Veterinaria.class, mascota.getVeterinariaId());
	}
	
	

}
