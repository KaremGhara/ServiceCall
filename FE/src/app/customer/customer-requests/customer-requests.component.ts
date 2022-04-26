import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RequsetCustomer } from 'src/app/beans/requset-customer';
import { RequserCustomerService } from 'src/app/services/requser-customer.service';
import { MatDialog } from '@angular/material/dialog';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-requests',
  templateUrl: './customer-requests.component.html',
  styleUrls: ['./customer-requests.component.sass']
})
export class CustomerRequestsComponent implements OnInit {
  requserCustomer:RequsetCustomer[];
  isTblLoading = true;
  displayedColumns=['isComplete','id','deviceType','problemDescription','repairType','deviceName','action']
  RequserCustomerDatabase: RequserCustomerService | null;
  dataSource:MatTableDataSource<RequsetCustomer>;
  selection = new SelectionModel<RequsetCustomer>(true, []);
  custId:string;
  breadscrums = [
    {
      title: 'Request Technician',
      items: ['Customer'],
      active: 'Request Technician',
    },
  ];

  constructor(private requestCustomerService: RequserCustomerService,private route :Router,public dialog: MatDialog) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    const storedItems= JSON.parse(localStorage.getItem('currentUser'))
    this.custId=storedItems.email;
    this.getCustomerRequest();
  }
  getCustomerRequest()
  {
    console.log(this.custId);
    
        this.requestCustomerService.getAllRequestCustomerBycostomerId(this.custId).subscribe(res=>{          
        this.isTblLoading = false;
        this.dataSource= new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;

    })
  }
  applyFilter($event:any){
    this.dataSource.filter=$event.target.value;
  }
  deleteRequsetCustomer(row) {
        
    Swal.fire({
      title: "?אתה בטוח רוצה למחוק ",
      text: row.id,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor:'#d33' ,
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'כן',
    }).then((result) => {
      if (result.value) {            
        this.requestCustomerService.deleteRequestCustomerbyid(row.id).subscribe(res =>{
          if(res){
            this.getCustomerRequest();
            Swal.fire('מחוק!', row.id+' נמחק.', 'success');                
          }
        }) 
      }
      this.getCustomerRequest();
    });    

}
}
