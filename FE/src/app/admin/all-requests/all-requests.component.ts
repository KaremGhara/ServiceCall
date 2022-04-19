import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-requests',
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.sass']
})
export class AllRequestsComponent implements OnInit {
  breadscrums = [
    {
      title: 'All requests',
      items: ['requests'],
      active: 'All requests',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
