import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { CadastroSalaComponent } from './cadastro-sala/cadastro-sala.component';
import { CompraIngressoComponent } from './compra-ingresso/compra-ingresso.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { ListaSalaComponent } from './lista-sala/lista-sala.component';
import { ListaSessoesComponent } from './lista-sessoes/lista-sessoes.component';

const routes: Routes = [
  {path: '', component: ListaSessoesComponent},
  {path: 'checkout', component: CompraIngressoComponent},
  {path: 'usuario', component: CadastroClienteComponent},
  {path: 'filme',
    children: [
      {path: '', component: ListaFilmesComponent },
      {path: 'cadastro', component: CadastroFilmesComponent },
      {path: 'cadastro/:id', component: CadastroFilmesComponent }
    ]
  },
  {path:'sala', 
    children:[
      {path:'', component:ListaSalaComponent},
      {path:'cadastro', component:CadastroSalaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
