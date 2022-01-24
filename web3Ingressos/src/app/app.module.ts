import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { CompraIngressoComponent } from './compra-ingresso/compra-ingresso.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { CadastroSessaoComponent } from './cadastro-sessao/cadastro-sessao.component';
import { CadastroSalaComponent } from './cadastro-sala/cadastro-sala.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaSessoesComponent } from './lista-sessoes/lista-sessoes.component';

@NgModule({
  declarations: [
    AppComponent,
    CompraIngressoComponent,
    CadastroClienteComponent,
    CadastroFilmesComponent,
    CadastroSessaoComponent,
    CadastroSalaComponent,
    ListaSessoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
