package com.BlogPessoal.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.BlogPessoal.models.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	
	public Optional<Usuario> findAllByUsuarioContainingIgnoreCase(String nome);

	public Optional<Usuario> findByUsuario(String usuario);
}
