import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Usuario } from '../model/usuario';
import { Endereco } from '../model/endereco';
import { UsuarioService } from '../service/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  usuario:Usuario = new Usuario();
  endereco:Endereco = new Endereco();
  
  constructor(private _formBuilder: FormBuilder, private usuarioService:UsuarioService,private snackbar:MatSnackBar,private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstCtrl1: ['', Validators.required],
      firstCtrl2: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      secondCtrl1: ['', Validators.required],
      secondCtrl2: ['', Validators.required],
      secondCtrl3: ['', Validators.required],
      secondCtrl4: ['', Validators.required],
    });
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.achar(parseInt(id));
    }
  }
  achar(id:Number){
    this.usuarioService.findOne(id).subscribe(
      (response) =>{
        this.usuario = <Usuario>(response);
        this.endereco = this.usuario.endereco;
        console.log(this.usuario)
      }, (response) => {
        console.log()
      }
    );
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  //métodos http

  openSnackbar(message:string, action:string){
    this.snackbar.open(message, action, {duration:2000});
  }
  salvar(){
    this.usuario.endereco = this.endereco;
    if(this.activatedRoute.snapshot.paramMap.get('id')){
      console.log(this.usuario)
      this.usuarioService.update(this.usuario).subscribe(
        (response)=>{
          this.openSnackbar(this.usuario.nome + ' salva com sucesso', 'fechar');
          this.router.navigate(['']);
        },(response)=>{
          this.openSnackbar('Não foi possível atualizar', 'fechar');
        }
      );

    
    }else{
      console.log(this.usuario)
      this.usuarioService.create(this.usuario).subscribe(
        (response) => {
          this.openSnackbar('Sala ' +this.usuario.nome + ' salva com sucesso', 'fechar');
          this.router.navigate(['']);
        },(response) =>{
          console.log(response.error)
          this.openSnackbar( 'Não foi possível salvar', 'fechar');
        }
      );
    }
  }
}
