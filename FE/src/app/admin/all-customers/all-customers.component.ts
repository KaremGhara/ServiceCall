import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.sass']
})
export class AllCustomersComponent implements OnInit {
  breadscrums = [
    {
      title: 'All costomers',
      items: ['costomers'],
      active: 'All costomers',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
