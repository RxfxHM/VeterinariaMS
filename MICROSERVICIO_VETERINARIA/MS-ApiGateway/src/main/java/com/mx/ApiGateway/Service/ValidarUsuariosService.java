package com.mx.ApiGateway.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.mx.ApiGateway.Entity.Usuarios;
import com.mx.ApiGateway.Repository.IUsuariosRepository;

@Service
public class ValidarUsuariosService implements UserDetailsService{

	@Autowired
	private IUsuariosRepository dao;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Usuarios usuario = dao.findByUsuario(username).
				orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));
		
		return User.builder()
				.username(usuario.getUsuario())
				.password(usuario.getPassword())
				.roles(usuario.getRol())
				.build();
	}
	
	
}
