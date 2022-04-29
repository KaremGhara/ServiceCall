import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerTechnician } from 'src/app/beans/answer-technician';
import { RequsetCustomer } from 'src/app/beans/requset-customer';
import { AnswerTechnicianService } from 'src/app/services/answer-technician.service';
import { RequserCustomerService } from 'src/app/services/requser-customer.service';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.sass']
})
export class MyRequestsComponent implements OnInit {
  breadscrums = [
    {
      title: 'My requests',
      items: ['requests'],
      active: 'My requests',
    },
  ];
  idTech:number;
  code:number;
  requsetCustomer:RequsetCustomer[];
  answerTechnician:AnswerTechnician;
  isTblLoading = true;
  displayedColumns=['isComplete','CustomerName','phone','email','deviceName','deviceType','problemDescription','id','Answerdate','action']
  CustomerDatabase: RequserCustomerService | null;
dataSource:MatTableDataSource<RequsetCustomer>;
selection = new SelectionModel<RequsetCustomer>(true, []);

  constructor(
    public dialog: MatDialog,
    private router:Router,
    private snackBar: MatSnackBar,
    private route:ActivatedRoute,
    private requserCustomerService:RequserCustomerService,
    private answerTechnicianService:AnswerTechnicianService,

  ) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  

  ngOnInit(): void {
    const storedItems= JSON.parse(localStorage.getItem('currentUser'))
    this.idTech=storedItems.id;
    this.getRequestByTechnicianId();
    // this.answerTechnicianService.getByRepairCode(this.code).subscribe(data=>{
    //   this.answerTechnician=data;
    // })

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
    // this.code=row.id;
    this.router.navigate(['technician/answerTechnician',row.id])
  }
}
