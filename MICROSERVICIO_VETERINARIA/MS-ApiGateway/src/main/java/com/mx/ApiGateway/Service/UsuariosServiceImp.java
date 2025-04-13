package com.mx.ApiGateway.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.mx.ApiGateway.Entity.Usuarios;
import com.mx.ApiGateway.Repository.IUsuariosRepository;

@Service
public class UsuariosServiceImp implements IUsuariosService{
	
	@Autowired
	private IUsuariosRepository dao;
	
	@Autowired
	private PasswordEncoder password;

	@Override
	public Usuarios guardar(Usuarios usuario) {
		String encriptada = password.encode(usuario.getPassword());
		usuario.setPassword(encriptada);
		return dao.save(usuario);
	}

}
