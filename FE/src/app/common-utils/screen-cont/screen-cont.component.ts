import { Component, ContentChild, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-cont',
  templateUrl: './screen-cont.component.html',
  styleUrls: ['./screen-cont.component.sass']
})
export class ScreenContComponent implements OnInit {

  @Input() 
  title:string = "*** Need to set this title ***"
  
  @Input() 
  breadscrums = []

  @ContentChild(Component) childComponent:Component;
  constructor() { }

  ngOnInit(): void {
  }

}
