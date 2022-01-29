import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../service/filme.service';
import { Filme } from '../model/filme';
import { Sala } from '../model/sala';
import { SalaService } from '../service/sala.service';
import { Sessao } from '../model/sessao';
import { SessaoService } from '../service/sessao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-sessao',
  templateUrl: './cadastro-sessao.component.html',
  styleUrls: ['./cadastro-sessao.component.css']
})
export class CadastroSessaoComponent implements OnInit {
  minDate!: Date;
  maxDate!: Date;
  filmes: any;
  salas: any;
  sessao:Sessao = new Sessao();
  filmeop!:Filme;
  salaop!:Sala;
  selected = '';
  selected2 = '';
  horaInicio = '';
  dataSessao!:Date;

  constructor(private salaService:SalaService, private filmeService:FilmeService, private sessaoService:SessaoService, private router:Router) {
    this.minDate = new Date();
    this.maxDate = new Date(new Date().getTime() + (25*5) * 60 * 60 * 1000)
  }

  ngOnInit(): void {
    this.findAll();
  }
  
  salvar(){
    this.manipulaData();
    const filmeF = this.filmes.filter((filme:Filme)=>{
      return filme.id_filme == this.selected2;
    });
    const salaF = this.salas.filter((sala:Sala)=>{
      return sala.id_sala == this.selected;
    });
    this.sessao.sala = salaF[0]
    this.sessao.filme = filmeF[0];
    this.sessaoService.create(this.sessao).subscribe(
      (response)=>{
        
        console.log('sucesso')
        this.router.navigate(['']);
      },(response)=>{
        console.log('erro')
      }
    );
    console.log(this.sessao)
  }
  findAll(){
    this.filmeService.findAll().subscribe(
      (response)=>{
        this.filmes = <Filme[]>(response)
        console.log('sucesso')
      },(response)=>{
        console.log('erro')
      }
    )
    this.salaService.findAll().subscribe(
      (response)=>{
        this.salas = <Sala[]>(response)
        console.log('sucesso')
      },(response)=>{
        console.log('erro')
      }
    )
  }
  manipulaData(){
    var data = this.dataSessao.toString()
    console.log(data)
    var ind = data.indexOf('(');
    var remover = data.substring(ind-1, data.length)
    var newData = data.replace(remover, '');
    newData = newData.replace('00:00', this.horaInicio);
    console.log(newData)
    var dataHora = new Date(newData)
    const filmeF = this.filmes.filter((filme:Filme)=>{
      return filme.id_filme == this.selected2;
    });
    var minutos = filmeF[0].duracao
    this.sessao.fim = new Date(new Date(newData).getTime() + (minutos) * 60 * 1000)
    this.sessao.inicio = dataHora;
  }
}
