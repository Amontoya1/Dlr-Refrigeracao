import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { InstalacaoComponent } from './instalacao/instalacao.component';



@NgModule({
  declarations: [
    HomeComponent,
    InstalacaoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    HomeRoutingModule 
  ]
})
export class HomeModule { }
