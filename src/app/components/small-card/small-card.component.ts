import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss','./small-card.component.responsive.scss', ]
})
export class SmallCardComponent implements OnInit {
  @Input()
  photo:string=""

  @Input()
  title:string=""

  @Input()
  link:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
