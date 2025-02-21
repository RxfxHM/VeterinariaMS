package com.mx.Clientes.Service;

import java.util.List;

import com.mx.Clientes.Entity.Clientes;


public interface IClientesService {
	
	public Clientes guardarCliente(Clientes cliente);
	
	public List<Clientes> listarClientes();
	
	public Clientes editarCliente(Clientes cliente);
	
	public Clientes eliminarCliente(Long idCliente);
	
	public Clientes buscarCliente(Long idCliente);

}
