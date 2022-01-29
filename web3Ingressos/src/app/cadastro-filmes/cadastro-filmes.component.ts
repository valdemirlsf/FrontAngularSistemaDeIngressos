import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from '../service/filme.service';
import { Filme } from '../model/filme';
import { MatSnackBar } from '@angular/material/snack-bar'
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.css']
})
export class CadastroFilmesComponent implements OnInit {
  filme: Filme = new Filme();
  dataFilme!:Date;
  constructor(private activatedRoute: ActivatedRoute, private filmeService: FilmeService, private snackbar:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.achar(parseInt(id));
    }
    
  }
  achar(id:Number){
    this.filmeService.findOne(id).subscribe(
      (response) =>{
        this.filme = <Filme>(response)   
      }, (response) => {
        console.log('Filme não encontrada')
      }
    );
  }
  //método para o snack bar
  openSnackbar(message:string, action:string){
    this.snackbar.open(message, action, {duration:2000});
  }

  //Salvar filme
  salvar(){
    
    console.log(this.filme.data_lancamento)
    if(this.activatedRoute.snapshot.paramMap.get('id')){
      this.filmeService.update(this.filme).subscribe(
        (response)=>{
          this.openSnackbar(this.filme.nome + ' salvo com sucesso', 'fechar');
          this.router.navigate(['filme']);
        },(response)=>{
          this.openSnackbar('Não foi possível atualizar', 'fechar');
        }
      );

    
    }else{
      console.log(this.filme)
      this.filmeService.create(this.filme).subscribe(
        (response) => {
          this.openSnackbar('Filme ' +this.filme.nome + ' salva com sucesso', 'fechar');
          this.router.navigate(['filme']);
        },(response) =>{
          console.log(response.error)
          this.openSnackbar('Erro ao salvar', 'fechar');
        }
      );
    }
  }
  //Método de teste para manipular data

}
