import { TitleH1Component } from './title-h1/title-h1.component';
import { FooterComponent } from './footer/footer.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [FooterComponent, SliderComponent, HeaderComponent, TitleH1Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,

  ],
  exports: [FooterComponent, SliderComponent,  HeaderComponent, TitleH1Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
