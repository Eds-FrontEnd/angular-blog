import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss',
  './big-card.component.responsive.scss']
})
export class BigCardComponent implements OnInit {
  @Input()
  photoDesktop:string="";

  @Input()
  photoMobile:string="";

  @Input()
  titleBigCard:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
