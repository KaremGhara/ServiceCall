import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {  Router } from '@angular/router';
import { RequsetCustomer } from 'src/app/beans/requset-customer';
import { RequserCustomerService } from 'src/app/services/requser-customer.service';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.sass']
})
export class MyRequestsComponent implements OnInit {
  breadscrums = [
    {
      title: 'פניות שלי',
      items: ['פניות'],
      active: 'פניות שלי',
    },
  ];
  idTech:number;
  requsetCustomer:RequsetCustomer[];
  isTblLoading = true;
  displayedColumns=['isComplete','CustomerName','phone','email','deviceName','deviceType','openDate','closeDate','id','Answerdate','MessageFromCust','action']
  CustomerDatabase: RequserCustomerService | null;
dataSource:MatTableDataSource<RequsetCustomer>;
selection = new SelectionModel<RequsetCustomer>(true, []);

  constructor(
    public dialog: MatDialog,
    private router:Router,
    private requserCustomerService:RequserCustomerService,

  ) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  

  ngOnInit(): void {
    const storedItems= JSON.parse(localStorage.getItem('currentUser'))
    this.idTech=storedItems.id;
    this.getRequestByTechnicianId();
  }

  getRequestByTechnicianId(){
    this.requserCustomerService.findRequestByTechnicianId(this.idTech).subscribe(data => {
      this.isTblLoading = false;
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  applyFilter($event:any){
    this.dataSource.filter=$event.target.value;
  }

  AnswerTechnician(row){
    this.router.navigate(['technician/answerTechnician',row.id])
  }
}
