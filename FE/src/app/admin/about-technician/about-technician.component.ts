import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { RequsetCustomer } from 'src/app/beans/requset-customer';
import { RequserCustomerService } from 'src/app/services/requser-customer.service';

@Component({
  selector: 'app-about-technician',
  templateUrl: './about-technician.component.html',
  styleUrls: ['./about-technician.component.sass']
})
export class AboutTechnicianComponent implements OnInit {
  breadscrums = [
    {
      title: 'About technician',
      items: ['technician'],
      active: 'About technician',
    },
  ];
  idTech:number;
  requsetCustomer:RequsetCustomer[];
  isTblLoading = true;
  displayedColumns=['isComplete','CustomerName','phone','email','deviceName','deviceType','problemDescription','date','id','Answerdate']
  CustomerDatabase: RequserCustomerService | null;
dataSource:MatTableDataSource<RequsetCustomer>;
selection = new SelectionModel<RequsetCustomer>(true, []);

  constructor(
    public dialog: MatDialog,
    private router:Router,
    private snackBar: MatSnackBar,
    private route:ActivatedRoute,
    private requserCustomerService:RequserCustomerService

  ) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  

  ngOnInit(): void {
    this.idTech=this.route.snapshot.params['idrow'];
    this.getAllRequestCustomers();

  }

  getAllRequestCustomers(){
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

  backToListTechnician(){
    this.router.navigate(['admin/allTechnician'])
  }
}
