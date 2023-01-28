import { CAROUSEL_DATA_ITEMS_HOME } from './../../shared/const/carousel.const';
import { Component, OnInit } from '@angular/core';
import { ICarouselItem } from 'src/app/shared/slider/slide.interface';

@Component({
  selector: 'dlr-instalacao',
  templateUrl: './instalacao.component.html',
  styleUrls: ['./instalacao.component.scss'],
})
export class InstalacaoComponent implements OnInit {
  longText = ` Nossos profissionais são qualificados e certificados. Fazemos Instalação em empresas, shoppings, cinemas, laboratórios, unidades hospitalares, indústrias e prédios. Oferecemos agilidade, segurança e comprometimento.`;

  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS_HOME;

  constructor() {}

  ngOnInit(): void {}
}
