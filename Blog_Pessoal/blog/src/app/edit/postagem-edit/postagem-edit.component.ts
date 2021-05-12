import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]



  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  user: User = new User()
  idUser = environment.id




  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private auth: AuthService
  ) { }

  ngOnInit() {

    window.scrollTo(0, 0)

    if (environment.token == "") {
      //alert('Sua seção expirou, faça o login novamente!')
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']

    this.getAllTemas()

    this.getByIdUser()
    this.getByIdPostagem(id)

  }


  atualizarPostagem() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.router.navigate(['/inicio'])
      alert("Atualização completa!")


    })
  }

  getAllTemas() {

    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })

  }

  getByIdTema() {


    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })

  }

  getByIdPostagem(id: number) {

    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  getByIdUser() {
    this.auth.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp

    })
  }
}
