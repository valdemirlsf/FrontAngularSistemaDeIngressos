import { Component, OnInit } from '@angular/core';
import { SalaService } from '../service/sala.service';
import { Sala } from '../model/sala';
import { MatSnackBar } from '@angular/material/snack-bar'
@Component({
  selector: 'app-lista-sala',
  templateUrl: './lista-sala.component.html',
  styleUrls: ['./lista-sala.component.css']
})
export class ListaSalaComponent implements OnInit {
  salas: any; 
  buscando:boolean = false;
  constructor(private salaService:SalaService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.findAllRooms();
  }
  findAllRooms(){
    this.buscando = true;
    this.salaService.findAll().subscribe(
      (response)=>{
        this.salas = <Sala[]>(response)
        this.openSnackbar('Salas disponíveis','fechar')
        this.buscando=false;
      },(response)=>{
        this.buscando=false;
        this.openSnackbar('Não foi possível encontrar salas', 'fechar')
      }
    );
  }
  deletar(id:Number){
    this.salaService.delete(id).subscribe(
      (response)=>{
        this.openSnackbar('Sala Excluída','fechar');
        this.findAllRooms();
      },(response)=>{
        this.openSnackbar('Não foi possível excuir a sala', 'fechar');
      }
    );
  }
  openSnackbar(message:string, action:string){
    this.snackbar.open(message, action, {duration:2000});
  }
}
