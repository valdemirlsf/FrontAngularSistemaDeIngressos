import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../service/filme.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Filme } from '../model/filme';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {
  buscando:boolean=false;
  filmes:any;
  constructor(private filmeService:FilmeService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.findAllMovies();
  }
  findAllMovies(){
    this.buscando = true;
    this.filmeService.findAll().subscribe(
      (response)=>{
        this.filmes = <Filme[]>(response)
        this.openSnackbar('Filmes disponíveis','fechar')
        this.buscando=false;
      },(response)=>{
        this.buscando=false;
        this.openSnackbar('Não foi possível encontrar os filmes', 'fechar');
      }
    );
  }
  deletar(id:Number){
    this.filmeService.delete(id).subscribe(
      (response)=>{
        this.openSnackbar('Sala Excluída','fechar');
        this.findAllMovies();
      },(response)=>{
        this.openSnackbar('Não foi possível excuir o filme', 'fechar');
      }
    );
  }
  openSnackbar(message:string, action:string){
    this.snackbar.open(message, action, {duration:2000});
  }

}
