import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { NovidadesComponent } from './pages/novidades/novidades.component';
import { TendenciasComponent } from './pages/tendencias/tendencias.component';
import { BlackfridayComponent } from './pages/blackfriday/blackfriday.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { OutonoComponent } from './pages/outono/outono.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { VeraoComponent } from './pages/verao/verao.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BigCardComponent,
    SmallCardComponent,
    NovidadesComponent,
    TendenciasComponent,
    BlackfridayComponent,
    TopBarComponent,
    ButtonComponent,
    OutonoComponent,
    FooterComponent,
    InfoCardComponent,
    VeraoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
