import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Endereco } from "../model/endereco";

@Injectable({
    providedIn: 'root'
})

export class EnderecoService{
    private url_api = 'http://localhost:8080';

    constructor(private http: HttpClient){
        
    }
    create (endereco :Endereco){
        return this.http.post<Endereco[]>(this.url_api+'/cadastro/endereco/salvar', endereco);
    }
    findAll(){
        return this.http.get<Endereco[]>(this.url_api+'/cadastro/endereco/listar');
    }
    findOne(id: Number){
        return this.http.get<Endereco>(this.url_api+'/cadastro/endereco/'+id);
    }
    delete(id: Number){
        return this.http.delete<Endereco>(this.url_api+'/cadastro/endereco/remover'+id);
    }
    update (endereco: Endereco){
        return this.http.put<Endereco[]>(this.url_api+'/cadastro/endereco/editar'+endereco.id, endereco);
    }
}