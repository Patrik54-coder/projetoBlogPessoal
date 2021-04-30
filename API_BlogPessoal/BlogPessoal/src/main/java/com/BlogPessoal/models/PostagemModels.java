package com.BlogPessoal.models;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@Entity
@Table(name = "PostagemModels")
public class PostagemModels {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String titulo;
	private String texto;
	@Temporal(TemporalType.DATE)
	private Date date = new java.sql.Date(System.currentTimeMillis());
	@ManyToOne
	@JsonIgnoreProperties("PostagemModels")
	private PostagemTema tema;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getTexto() {
		return texto;
	}
	public void setTexto(String texto) {
		this.texto = texto;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public PostagemTema getTema() {
		return tema;
	}
	public void setTema(PostagemTema tema) {
		this.tema = tema;
	}
}
