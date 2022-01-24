import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Sala } from "../model/sala";

@Injectable({
    providedIn: 'root'
})

export class SalaService{
    private url_api = 'http://localhost:8080';

    constructor(private http: HttpClient){
        
    }
    create (sala :Sala){
        return this.http.post<Sala[]>(this.url_api+'/cadastro/sala/salvar', sala);
    }
    findAll(){
        return this.http.get<Sala[]>(this.url_api+'/cadastro/sala/listar');
    }
    findOne(id: Number){
        return this.http.get<Sala>(this.url_api+'/cadastro/sala/'+id);
    }
    delete(id: Number){
        return this.http.delete<Sala>(this.url_api+'/cadastro/sala/remover'+id);
    }
    update (sala: Sala){
        return this.http.put<Sala[]>(this.url_api+'/cadastro/sala/editar'+sala.id_sala, sala);
    }
}