import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/user';
import { usarioLogin } from '../model/usuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient
    ) {}

  entrar(userLogin: usarioLogin): Observable<usarioLogin> {
    return this.http.post<usarioLogin>("http://localhost:8080/Usuario/logar",userLogin)
  }

  cadastrar(user:User): Observable<User>{
    return this.http.post<User>("http://localhost:8080/Usuario/cadastrar", user)

  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`http://localhost:8080/Usuario/${id}`)
  }

  logado(){
    let ok: boolean= false

    if(environment.token != ""){
      ok = true
    }

    return ok
  }
}
