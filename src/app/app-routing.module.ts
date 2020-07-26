import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { EmbaralharComponent } from './embaralhar/embaralhar.component';
import { LerComponent } from './ler/ler.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'entrar'
  },
  {
    path: 'entrar',
    component: EntrarComponent,
  },
  {
    path: 'embaralhar',
    component: EmbaralharComponent,
  },
  {
    path: 'ler',
    component: LerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
