package com.BlogPessoal.controller;

import java.util.Optional;
import javax.validation.Valid;
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
import com.BlogPessoal.models.Usuario;
import com.BlogPessoal.models.UsuarioLogin;
import com.BlogPessoal.repository.UsuarioRepository;
import com.BlogPessoal.service.UsuarioService;

@RestController
@RequestMapping("/Usuario")
@CrossOrigin("*")
public class UsuarioController {

	private @Autowired UsuarioRepository repository;
	private @Autowired UsuarioService serviceUsuario;

	@PostMapping("/cadastrar")
	public ResponseEntity<?> cadastrarUsuario(@Valid @RequestBody Usuario novoUsuario) {
		Optional<Usuario> dto = serviceUsuario.cadastrarUsuario(novoUsuario);
		return !dto.isEmpty() ? ResponseEntity.ok(dto) : ResponseEntity.notFound().build();
	}

	@PostMapping("/logar")
	public ResponseEntity<UsuarioLogin> auth(@RequestBody Optional<UsuarioLogin> usuarioLogin) {
		return serviceUsuario.logar(usuarioLogin).map(usuario -> ResponseEntity.ok(usuario))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Usuario> GetById(@PathVariable long id) {
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}
	@PutMapping("/alterar")
	public ResponseEntity<Usuario> put (@RequestBody Usuario usuario){
	return ResponseEntity.ok(repository.save(usuario));
	}
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		repository.deleteById(id);
	}
}
