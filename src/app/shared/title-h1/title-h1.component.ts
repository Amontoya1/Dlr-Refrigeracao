import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dl-title-h1',
  templateUrl: './title-h1.component.html',
  styleUrls: ['./title-h1.component.scss']
})
export class TitleH1Component implements OnInit {
 @Input() text = '';
 @Input() type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'dark' = 'primary';
  constructor() { }

  ngOnInit() {
  }

}
