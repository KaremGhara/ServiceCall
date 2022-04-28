import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-technician',
  templateUrl: './answer-technician.component.html',
  styleUrls: ['./answer-technician.component.sass']
})
export class AnswerTechnicianComponent implements OnInit {
  breadscrums = [
    {
      title: 'Answer technician',
      items: ['technician'],
      active: 'Answer technician',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
