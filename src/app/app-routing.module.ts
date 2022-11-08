import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PaginaComponent } from './pagina/pagina.component';
import { ServicioComponent } from './servicio/servicio.component';

const routes: Routes = [
  { path: '1', component: InicioComponent },
  { path: '2', component: PaginaComponent },
  { path: '3', component: PaginaComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
