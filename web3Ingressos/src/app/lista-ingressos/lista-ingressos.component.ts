import { Component, OnInit } from '@angular/core';
import { Ingresso } from '../model/ingresso';
import { MatTableDataSource } from '@angular/material/table';
import { IngressoService } from '../service/ingresso.service';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-lista-ingressos',
  templateUrl: './lista-ingressos.component.html',
  styleUrls: ['./lista-ingressos.component.css']
})
export class ListaIngressosComponent implements OnInit {
  email='';
  aviso='';
  ingressos:any = new MatTableDataSource();
  usuario!:Usuario;
  usuarios:any;
  exibirDiv=false;
  displayedColumns: string[] = ['Filme', 'Data', 'Horário', 'Actions'];
  ingressosFiltrados:Ingresso[]=[];
  constructor(private ingressoService:IngressoService, private usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }
  acharIngressos(){
    this.ingressoService.findAll().subscribe(
      (response)=>{
        this.ingressos = <Ingresso[]>(response)
        this.filtrarIngressos()
      },(response)=>{
        this.aviso = 'Não foi possível conectar ao servidor'
      }
    )
  }
  filtrarIngressos(){
    this.ingressosFiltrados = this.ingressos;
    var ingressosf = this.ingressosFiltrados.filter(
      (ingresso:Ingresso)=>{
        return ingresso.usuario!=null
      }
    );
    this.ingressosFiltrados = ingressosf;
    ingressosf = this.ingressosFiltrados.filter(
      (ingresso:Ingresso)=>{
        return ingresso.usuario['email']==this.email
      }
    );
    this.ingressosFiltrados = ingressosf;
    this.exibirDiv = true;
    this.email='';
    
  }

}
