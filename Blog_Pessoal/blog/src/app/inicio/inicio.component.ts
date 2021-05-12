import { environment } from './../../environments/environment.prod';
import { AuthService } from './../service/auth.service';
import { User } from './../model/User';
import { Tema } from 'src/app/model/Tema';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Postagem } from '../model/Postagem';

import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import { UserLogin } from '../model/UserLogin';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]
  
 

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  user: User = new User()
  idUser = environment.id


 

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private auth: AuthService
  ) { }

  ngOnInit() {
  window.scrollTo(0,0)

    if(environment.token == ""){
      //alert('Sua seção expirou, faça o login novamente!')
      this.router.navigate(['/entrar'])
    }

    this.getAllTemas()
    this.getAllPostagem()
    this.getByIdUser()
  }

  enviar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema
    
    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
    this.postagem = resp
    alert('Postagem realizado com sucesso!')
    this.postagem = new Postagem()
    this.getAllPostagem()
    })

  }

  atualizarPostagem(){

  }

  getAllTemas(){

    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })

  }

  getByIdTema(){

    this.temaService.getByIdTema(this.idTema).subscribe((resp :Tema) =>{
      this.tema = resp
    })

  }

  getAllPostagem(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) =>{
      this.listaPostagem = resp
    })
  }



  getByIdUser(){
    this.auth.getByIdUser(this.idUser).subscribe((resp: User) =>{
      this.user = resp

    })
  }


}
