import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/beans/customer';
import { CustomerService } from 'src/app/services/customer.service';
import Swal from 'sweetalert2';

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

  customers:Customer[];
  isTblLoading = true;
  displayedColumns=['action','phone','address','email','name']
  CustomerDatabase: CustomerService | null;
dataSource:MatTableDataSource<Customer>;
selection = new SelectionModel<Customer>(true, []);

  constructor(
    public dialog: MatDialog,
    private router:Router,
    private snackBar: MatSnackBar,
    private route:ActivatedRoute,
    private customerService:CustomerService

  ) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  

  ngOnInit(): void {
    this.getAllCustomers();

  }

  getAllCustomers(){
    this.customerService.getAllCustomers().subscribe(data => {
      this.isTblLoading = false;
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })
  }

  deleteCustomer(row) {
        
    Swal.fire({
      title: "?אתה בטוח רוצה למחוק ",
      text: row.name,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor:'#d33' ,
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'כן',
    }).then((result) => {
      if (result.value) {            
        this.customerService.deleteCustomerById(row.id).subscribe(res =>{
          if(res){
            this.getAllCustomers();
            Swal.fire('מחוק!', row.name+' נמחק.', 'success');                
          }
        }) 
      }
      this.getAllCustomers();
    });   

}

  applyFilter($event:any){
    this.dataSource.filter=$event.target.value;
  }
}
