import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../model/user';
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

  cadastrar(user:user): Observable<user>{
    return this.http.post<user>("http://localhost:8080/Usuario/cadastrar", user)

  }
}
