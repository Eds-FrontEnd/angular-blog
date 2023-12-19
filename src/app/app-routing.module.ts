import { HomeComponent } from './pages/home/home.component';
import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TendenciasComponent } from './pages/tendencias/tendencias.component';
import { NovidadesComponent } from './pages/novidades/novidades.component';
import { BlackfridayComponent } from './pages/blackfriday/blackfriday.component';
import { OutonoComponent } from './pages/outono/outono.component';
import { VeraoComponent } from './pages/verao/verao.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tendencias',
    component: TendenciasComponent
  },
  {
    path: 'novidades',
    component: NovidadesComponent
  },
  {
    path: 'outono',
    component: OutonoComponent
  },
  {
    path: 'blackfriday',
    component: BlackfridayComponent
  },
  {
    path: 'verao',
    component: VeraoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
