import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Sessao } from "../model/sessao";

@Injectable({
    providedIn: 'root'
})

export class SessaoService{
    private url_api = 'http://localhost:8080';

    constructor(private http: HttpClient){
        
    }
    create (sessao :Sessao){
        return this.http.post<Sessao[]>(this.url_api+'/sessao/salvar/', sessao);
    }
    findAll(){
        return this.http.get<Sessao[]>(this.url_api+'/sessao/listar');
    }
    findOne(id: Number){
        return this.http.get<Sessao>(this.url_api+'/sessao/'+id);
    }
    delete(id: Number){
        return this.http.delete<Sessao>(this.url_api+'/sessao/remover'+id);
    }
    update (sessao: Sessao){
        return this.http.put<Sessao[]>(this.url_api+'/sessao/editar/'+sessao.id_sessao, sessao);
    }
}