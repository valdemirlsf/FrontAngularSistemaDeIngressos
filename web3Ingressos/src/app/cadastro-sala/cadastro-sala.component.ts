import { Component, OnInit } from '@angular/core';
import { Sala } from '../model/sala';
import { SalaService } from '../service/sala.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-sala',
  templateUrl: './cadastro-sala.component.html',
  styleUrls: ['./cadastro-sala.component.css']
})
export class CadastroSalaComponent implements OnInit {
  sala: Sala = new Sala();

  constructor(private salaService: SalaService, private activatedRoute: ActivatedRoute, private snackbar:MatSnackBar, private router:Router) {
    
  }
  ngOnInit(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.achar(parseInt(id));
    }
  }
  openSnackbar(message:string, action:string){
    this.snackbar.open(message, action, {duration:2000});
  }
  salvar(){
    if(this.activatedRoute.snapshot.paramMap.get('id')){
      console.log(this.sala.id_sala)
      this.salaService.update(this.sala).subscribe(
        (response)=>{
          console.log(this.sala.qt_lugares)
          this.openSnackbar(this.sala.nome + ' salva com sucesso', 'fechar');
          this.router.navigate(['sala']);
        },(response)=>{
          this.openSnackbar('Não foi possível atualizar', 'fechar');
        }
      );

    
    }else{
      console.log(this.sala)
      this.salaService.create(this.sala).subscribe(
        (response) => {
          this.openSnackbar('Sala ' +this.sala.nome + ' salva com sucesso', 'fechar');
          this.router.navigate(['sala']);
        },(response) =>{
          console.log(response.error)
          this.openSnackbar(response.error.errors[0].defaultMessage, 'fechar');
        }
      );
    }
  }
  achar(id:Number){
    this.salaService.findOne(id).subscribe(
      (response) =>{
        this.sala = <Sala>(response)
        console.log('Sala encontrada')    
      }, (response) => {
        console.log('Sala não encontrada')
      }
    );
  }
}
