import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Ingresso } from "../model/ingresso";

@Injectable({
    providedIn: 'root'
})

export class IngressoService{
    private url_api = 'http://localhost:8080';

    constructor(private http: HttpClient){
        
    }
    create (ingresso :Ingresso){
        return this.http.post<Ingresso[]>(this.url_api+'/ingresso/salvar/', ingresso);
    }
    findAll(){
        return this.http.get<Ingresso[]>(this.url_api+'/ingresso/listar');
    }
    findOne(id: Number){
        return this.http.get<Ingresso>(this.url_api+'/ingresso/'+id);
    }
    delete(id: Number){
        return this.http.delete<Ingresso>(this.url_api+'/ingresso/remover/'+id);
    }
    update (ingresso: Ingresso){
        return this.http.put<Ingresso[]>(this.url_api+'/ingresso/editar/'+ingresso.id_ingresso, ingresso);
    }
}