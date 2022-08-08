import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  messageText:string
  displayedColumns=['isComplete','id','openDate','closeDate','deviceType','problemDescription','repairType','deviceName','Answerdate','chatWithTech']
  RequserCustomerDatabase: RequserCustomerService | null;
  dataSource:MatTableDataSource<RequsetCustomer>;
  selection = new SelectionModel<RequsetCustomer>(true, []);
  custemail:string;
  custId:number;
  breadscrums = [
    {
      title: 'בקשות',
      items: ['לקוח'],
      active: 'כל בקשות',
    },
  ];

  constructor(
    private requestCustomerService: RequserCustomerService,
    public dialog: MatDialog,
    ) { }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    const storedItems= JSON.parse(localStorage.getItem('currentUser'))
    this.custId=storedItems.id;
    this.custemail=storedItems.email;
    console.log(storedItems);
    this.getCustomerRequest();
  }

  getCustomerRequest()
  {
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

   openDialog(row){
  Swal.fire({
    input: 'textarea',
    inputLabel: 'Message',
    inputPlaceholder: 'Type your message here...',
    inputAttributes: {
      'aria-label': 'Type your message here'
    },
    showCancelButton: true
  }).then((res)=>{
    if(res.value){
      
     this.requestCustomerService.getRequsetById(row.id).subscribe(data=>{
       data.messageTech=res.value;
       this.requestCustomerService.updateRequsetCustomer(data).subscribe(res=>{
         
       })
     })
     Swal.fire("You Sent message to your Technician: "+res.value);
    }
  })

}
  
isComplete(row){
  if(row.complete){
    return 'טופלה'
  }
  else{
    return 'בטיפול'
  }
  }
  isCompleteColor(row){
    if(row.complete){
      return 'green'
    }
    else{
      return 'red'
    }
  }
}