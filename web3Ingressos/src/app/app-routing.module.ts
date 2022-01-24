import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ListaSessoesComponent } from './lista-sessoes/lista-sessoes.component';

const routes: Routes = [
  {path: 'usuario', component: CadastroClienteComponent},
  {path: '', component: ListaSessoesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
