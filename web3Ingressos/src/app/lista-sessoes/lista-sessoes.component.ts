import { Component, OnInit } from '@angular/core';
import { SessaoService } from '../service/sessao.service';
import { Sessao } from '../model/sessao';

@Component({
  selector: 'app-lista-sessoes',
  templateUrl: './lista-sessoes.component.html',
  styleUrls: ['./lista-sessoes.component.css']
})
export class ListaSessoesComponent implements OnInit {
  data:Date = new Date(); 
  dias: String[] = [];
  sessoes:any;
  sessoesHje!:Sessao[];
  constructor(private sessaoService:SessaoService) { }

  ngOnInit(): void {
    
    this.labelsTabs();
    this.listarSessoes();
    
  }

  listarSessoes(){
    this.sessaoService.findAll().subscribe(
      (response)=>{
        this.sessoes = <Sessao[]>(response)
        console.log(this.sessoes)
        this.sessoesHje = this.sessoes.filter((sessao:Sessao)=>{
          return sessao.inicio.toString() == new Date().toString();
        });
        console.log(this.sessoesHje)
      },(response) =>{
        console.log('Não foi possível listar as sessões')
      }
    );
  }
  labelsTabs(){
    var dia=0;
    for(var i=0;i<7;i++){
      var currentDate = new Date(new Date().getTime() + (24+dia) * 60 * 60 * 1000);
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var data = (day<10? '0'+day:day) + "/" + (month<10? '0'+month:month);
      this.dias.push(data);
      dia+=24;
    }
    console.log(this.dias)
  }

}
