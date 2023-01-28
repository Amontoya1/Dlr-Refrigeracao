import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS_REPA } from '../shared/const/carousel.const';
import { ICarouselItem } from '../shared/slider/slide.interface';

@Component({
  selector: 'dlr-reparacao',
  templateUrl: './reparacao.component.html',
  styleUrls: ['./reparacao.component.scss'],
})
export class ReparacaoComponent implements OnInit {
  longText = ` Não deixe o calor atrapalhar o seu dia a dia! Climatize seu ambiente de trabalho ou residência para alcançar maior produtividade e conforto. O calor e o desconforto térmico podem trazer impactos negativos para o seu dia a dia, pessoal ou profissional.`;

  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS_REPA;

  constructor() {}

  ngOnInit(): void {}
}
