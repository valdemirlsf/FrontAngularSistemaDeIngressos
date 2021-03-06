import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompraIngressoComponent } from './compra-ingresso/compra-ingresso.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { CadastroSessaoComponent } from './cadastro-sessao/cadastro-sessao.component';
import { CadastroSalaComponent } from './cadastro-sala/cadastro-sala.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaSessoesComponent } from './lista-sessoes/lista-sessoes.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { ListaSalaComponent } from './lista-sala/lista-sala.component';
import { ListaIngressosComponent } from './lista-ingressos/lista-ingressos.component';

@NgModule({
  declarations: [
    AppComponent,
    CompraIngressoComponent,
    CadastroClienteComponent,
    CadastroFilmesComponent,
    CadastroSessaoComponent,
    CadastroSalaComponent,
    ListaSessoesComponent,
    ListaFilmesComponent,
    ListaSalaComponent,
    ListaIngressosComponent
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
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
