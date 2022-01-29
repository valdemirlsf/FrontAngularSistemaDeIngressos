import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { CadastroSalaComponent } from './cadastro-sala/cadastro-sala.component';
import { CadastroSessaoComponent } from './cadastro-sessao/cadastro-sessao.component';
import { CompraIngressoComponent } from './compra-ingresso/compra-ingresso.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { ListaIngressosComponent } from './lista-ingressos/lista-ingressos.component';
import { ListaSalaComponent } from './lista-sala/lista-sala.component';
import { ListaSessoesComponent } from './lista-sessoes/lista-sessoes.component';

const routes: Routes = [
  {path: '', component: ListaSessoesComponent},
  {path: 'sessao', component: CadastroSessaoComponent},
  {path: 'ingresso', component: ListaIngressosComponent},
  {path: 'checkout/:id', component: CompraIngressoComponent},
  {path: 'usuario', 
    children:[
      {path: 'cadastro', component:CadastroClienteComponent},
      {path: 'cadastro/:id', component:CadastroClienteComponent}
    ]
  },
  {path: 'filme',
    children: [
      {path: '', component: ListaFilmesComponent },
      {path: 'cadastro', component: CadastroFilmesComponent },
      {path: 'cadastro/:id', component: CadastroFilmesComponent }
    ]
  },
  {path:'sala', 
    children:[
      {path: '', component: ListaSalaComponent},
      {path: 'cadastro', component: CadastroSalaComponent},
      {path: 'cadastro/:id', component: CadastroSalaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
