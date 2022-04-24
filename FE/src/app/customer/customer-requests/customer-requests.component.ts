import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-requests',
  templateUrl: './customer-requests.component.html',
  styleUrls: ['./customer-requests.component.sass']
})
export class CustomerRequestsComponent implements OnInit {
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
