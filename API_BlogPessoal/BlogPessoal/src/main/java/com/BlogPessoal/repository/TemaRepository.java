package com.BlogPessoal.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.BlogPessoal.models.PostagemTema;


public interface TemaRepository extends JpaRepository<PostagemTema, Long> {

public List<PostagemTema> findAllByDescricaoContainingIgnoreCase(String PostagemTema);

}


