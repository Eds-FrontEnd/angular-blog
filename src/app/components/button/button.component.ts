import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss','./button.component.responsive.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  link:string=""

  @Input()
  title:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
