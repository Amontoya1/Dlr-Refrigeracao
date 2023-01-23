import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManutencaoComponent } from './manutencao/manutencao.component';
import { ReparacaoComponent } from './reparacao/reparacao.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/home",
    pathMatch: "full"
  },
  { path: 'home',
   loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },
  {
    path: 'manutencao',
    component: ManutencaoComponent,
  },
  {
    path: 'reparacao',
    component: ReparacaoComponent,
  },
  {
    path: 'contact',
    component: ContactComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
