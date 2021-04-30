package com.BlogPessoal.service;

import java.nio.charset.Charset;
import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.BlogPessoal.models.Usuario;
import com.BlogPessoal.models.UsuarioLogin;
import com.BlogPessoal.repository.UsuarioRepository;


@Service
public class UsuarioService {
		
		private @Autowired UsuarioRepository repositoryUsuario;
		
		
		/**
		 * Registra no banco de dados um novo usuario para acessar o sistema caso não exista, retornando um optional com a entidade
		 * @return optional com usuario se os parametros estiverem devidamente escritos, caso contrario vazio(empty)
		 * @author patrik
		 */
		public Optional<Usuario> cadastrarUsuario(Usuario novoUsuario){
			
			Optional<Usuario> usuarioExistente = repositoryUsuario.findByUsuario(novoUsuario.getUsuario());
			if(usuarioExistente.isPresent()) {
			return Optional.empty();
			}
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			String senhaCriptografada = encoder.encode(novoUsuario.getSenha());
			novoUsuario.setSenha(senhaCriptografada);
			return Optional.ofNullable(repositoryUsuario.save(novoUsuario));
		}
		/**
		 * Logar um usuario existente para acessar o sistema 
		 * @return retorna o usuario caso os parametros estejam corretos
		 */
		public Optional<UsuarioLogin> logar(Optional<UsuarioLogin> usuarioLogin){
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			Optional<Usuario> usuarioPresente = repositoryUsuario.findByUsuario(usuarioLogin.get().getUsuario());

			if(usuarioPresente.isPresent()) {
				if(encoder.matches(usuarioLogin.get().getSenha(), usuarioPresente.get().getSenha())) {
					String auth = usuarioLogin.get().getUsuario() + ":" + usuarioLogin.get().getSenha();
					byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
					String authHeader = "Basic " + new String(encodedAuth);
					
					usuarioLogin.get().setToken(authHeader);				
					usuarioLogin.get().setUsuario(usuarioPresente.get().getUsuario());
					usuarioLogin.get().setSenha(usuarioPresente.get().getSenha());

					return usuarioLogin;
				}
			}
			return null;
}
}
