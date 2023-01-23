import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS_MANU } from '../shared/const/carousel.const';
import { ICarouselItem } from '../shared/slider/slide.interface';

@Component({
  selector: 'dlr-manutencao',
  templateUrl: './manutencao.component.html',
  styleUrls: ['./manutencao.component.scss'],
})
export class ManutencaoComponent implements OnInit {
  longText = ` Preventiva: Elaboramos o plano ideal e atuamos com um time completo  para atender o cliente de acordo com seus critérios e necessidades.`;

  longText2 = ` Corretiva: Visando a solução de problemas técnicos e de restabelecer o funcionamento do sistema, nossos atendimentos emergenciais para manutenções corretivas ocorrem de forma rápida, segura e objetiva.`;

  longText3 = ` Preditiva: Tem como objetivo diminuir as paradas não programadas e prevenir danos aos equipamentos. Também reduz o custos de manutenção.`
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS_MANU;

  constructor() {}

  ngOnInit(): void {}
}
