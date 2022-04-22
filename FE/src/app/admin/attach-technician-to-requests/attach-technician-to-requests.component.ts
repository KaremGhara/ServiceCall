import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attach-technician-to-requests',
  templateUrl: './attach-technician-to-requests.component.html',
  styleUrls: ['./attach-technician-to-requests.component.sass']
})
export class AttachTechnicianToRequestsComponent implements OnInit {
  breadscrums = [
    {
      title: 'Attach techician',
      items: ['techician'],
      active: 'Attach techician',
    },
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
