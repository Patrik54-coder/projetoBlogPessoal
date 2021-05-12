import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeletComponent } from './edit/tema-delet/tema-delet.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeletComponent } from './edit/postagem-delet/postagem-delet.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    TemaComponent,
    TemaEditComponent,
    TemaDeletComponent,
    PostagemEditComponent,
    PostagemDeletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide : LocationStrategy,
      useClass : HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
