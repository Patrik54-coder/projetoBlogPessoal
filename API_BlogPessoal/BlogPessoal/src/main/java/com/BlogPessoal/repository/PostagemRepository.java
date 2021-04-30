package com.BlogPessoal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.BlogPessoal.models.PostagemModels;

public interface PostagemRepository extends JpaRepository<PostagemModels, Long> {
public List<PostagemModels>
	findAllByTituloContainingIgnoreCase (String titulo); 
	
}
