import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Usuario } from "../model/usuario";

@Injectable({
    providedIn: 'root'
})

export class UsuarioService{
    private url_api = 'http://localhost:8080';

    constructor(private http: HttpClient){
        
    }
    create (usuario :Usuario){
        return this.http.post<Usuario[]>(this.url_api+'/usuario/salvar/', usuario);
    }
    findAll(){
        return this.http.get<Usuario[]>(this.url_api+'/usuario/listar/');
    }
    findOne(id: Number){
        return this.http.get<Usuario>(this.url_api+'/usuario/'+id);
    }
    delete(id: Number){
        return this.http.delete<Usuario>(this.url_api+'/usuario/remover/'+id);
    }
    update (usuario: Usuario){
        return this.http.put<Usuario[]>(this.url_api+'/usuario/editar/'+usuario.id_usuario, usuario);
    }
}