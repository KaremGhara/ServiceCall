import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-tech',
  templateUrl: './request-tech.component.html',
  styleUrls: ['./request-tech.component.sass']
})
export class RequestTechComponent implements OnInit {
  breadscrums = [
    {
      title: 'Request Technician',
      items: ['Customer'],
      active: 'Request Technician',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
