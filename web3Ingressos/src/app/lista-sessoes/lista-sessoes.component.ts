import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-sessoes',
  templateUrl: './lista-sessoes.component.html',
  styleUrls: ['./lista-sessoes.component.css']
})
export class ListaSessoesComponent implements OnInit {
  data:Date = new Date(); 
  dias: String[] = [];
  constructor() { }

  ngOnInit(): void {
    var dia=0;
    for(var i=0;i<7;i++){
      var currentDate = new Date(new Date().getTime() + (24+dia) * 60 * 60 * 1000);
      var day = currentDate.getDate()
      var month = currentDate.getMonth() + 1
      var data = (day<10? '0'+day:day) + "/" + (month<10? '0'+month:month);
      this.dias.push(data);
      dia+=24;
    }
    console.log(this.dias)
    
  }

}
