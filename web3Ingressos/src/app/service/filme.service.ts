import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Filme } from "../model/filme";

@Injectable({
    providedIn: 'root'
})

export class FilmeService{
    private url_api = 'http://localhost:8080';

    constructor(private http: HttpClient){
        
    }
    create (filme :Filme){
        return this.http.post<Filme[]>(this.url_api+'/cadastro/filme/salvar', filme);
    }
    findAll(){
        return this.http.get<Filme[]>(this.url_api+'/cadastro/filme/listar');
    }
    findOne(id: Number){
        return this.http.get<Filme>(this.url_api+'/cadastro/filme/'+id);
    }
    delete(id: Number){
        return this.http.delete<Filme>(this.url_api+'/cadastro/filme/remover'+id);
    }
    update (filme: Filme){
        return this.http.put<Filme[]>(this.url_api+'/cadastro/filme/editar'+filme.id_filme, filme);
    }
}