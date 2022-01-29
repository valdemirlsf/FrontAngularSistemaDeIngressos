import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SessaoService } from '../service/sessao.service';
import { IngressoService } from '../service/ingresso.service';
import { UsuarioService } from '../service/usuario.service';
import { Sessao } from '../model/sessao';
import { MatSnackBar } from '@angular/material/snack-bar'
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Ingresso } from '../model/ingresso';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-compra-ingresso',
  templateUrl: './compra-ingresso.component.html',
  styleUrls: ['./compra-ingresso.component.css']
})
export class CompraIngressoComponent implements OnInit {
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  quantidade = 1;
  id!:Number;
  total = 0;
  sessao!:Sessao;
  ingresso:Ingresso = new Ingresso();
  user!:Usuario;
  users!:any;
  emailUser = '';

  constructor(
    private _formBuilder: FormBuilder, 
    private sessionService:SessaoService, 
    private route:Router, 
    private activatedRoute:ActivatedRoute,
    private userService:UsuarioService,
    private ingressoService:IngressoService,
    private matSnackBar:MatSnackBar) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.achar(parseInt(id));
    }
    
    
  }
  achar(id:Number){
    this.sessionService.findOne(id).subscribe(
      (response)=>{
        this.sessao = <Sessao>(response)
        this.sessao.valor_sessao = Number(this.sessao.valor_sessao);
        this.total = Number(this.sessao.valor_sessao);
        console.log('Sessão encontrada')
      },(response)=>{
        console.log('Não foi possível encontrar sessão')
        this.route.navigate(['']);
      }
    );
  }
  acharUser(){
    this.userService.findAll().subscribe(
      (response)=>{
        this.users = <Usuario[]>(response)
        const userf = this.users.filter((usuario:Usuario)=>{
          return usuario.email == this.emailUser;
        });
        this.user = userf[0];
        this.ingresso.usuario = userf[0]
        this.ingressoService.create(this.ingresso).subscribe(
          (response)=>{
            console.log(this.ingresso.usuario)
            this.openSnackbar('Compra concluída', 'fechar');
          }, (response) => {
            this.openSnackbar('Não foi possível concluir a compra', 'fechar');
          }
        );
        console.log(this.ingresso)
      }, (response)=>{
        this.openSnackbar('Não achamos o usuário', 'fechar');
        this.route.navigate(['cadastro'])
      }
    );
  }
  salvar(){
    for(let i=0; i<this.quantidade;i++){
      console.log(this.sessao)
      this.ingresso.sessao = this.sessao;
      this.ingresso.valor = this.sessao.valor_sessao;
      this.ingresso.data_compra = new Date();
      this.acharUser()
    }
    
    
  }
  //addquantidade
  addQuantidade(){
    if(this.quantidade<=this.sessao.sala.qt_lugares){
      this.quantidade++
    }
  }
  //dimquantidade
  dimQuantidade(){
    if(this.quantidade>1){
      this.quantidade--
    }
  }
  openSnackbar(message:string, action:string){
    this.matSnackBar.open(message, action, {duration:2000});
  }
}
