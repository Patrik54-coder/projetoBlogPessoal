import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { usarioLogin } from '../model/usuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin : usarioLogin = new usarioLogin

  constructor(
    private auth: AuthService,
    private rout: Router
  ) { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: usarioLogin)=> {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.id = this.userLogin.id
      environment.foto = this.userLogin.foto

      this.rout.navigate(["/inicio"])
    },erro=>{
      if(erro.status == 500){
        alert("Usuario ou senha estão incorretos!")
      }
    })
  }
}
