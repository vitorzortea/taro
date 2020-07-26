import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { EmbaralharComponent } from './embaralhar/embaralhar.component';
import { LerComponent } from './ler/ler.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    EmbaralharComponent,
    LerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
