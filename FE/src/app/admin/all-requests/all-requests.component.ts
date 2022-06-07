import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RequserCustomerService } from '../../services/requser-customer.service';
import { RequsetCustomer } from 'src/app/beans/requset-customer';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-requests',
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.sass']
})
export class AllRequestsComponent implements OnInit {
  breadscrums = [
    {
      title: 'הצגת פניות',
      items: ['פניות'],
      active: 'הצגת פניות',
    },
  ];
  requserCustomer:RequsetCustomer[];
  isTblLoading = true;
  displayedColumns=['isComplete','CustomerName','phone','email','deviceType','deviceName','problemDescription','repairType','openDate','closeDate','id','action']
  dataSource:MatTableDataSource<RequsetCustomer>;
  selectedComplet:String=null;



  constructor(
    private requserCustomerService:RequserCustomerService, 
    public dialog: MatDialog,
    private router: Router, 

    ) { }
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
  

    ngOnInit(): void {
      this.getAllRequsetCustomers();
    }
  
    
    getAllRequsetCustomers(){
      console.log(this.selectedComplet)
      if(this.selectedComplet==='בהמתנה'){
        this.requserCustomerService.getAllRequestCustomersByAttach().subscribe(data => {
          this.isTblLoading = false;
          this.dataSource= new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        })

      }
      else if(this.selectedComplet==='בטיפול'){
        this.requserCustomerService.getAllReqByCompletFalse().subscribe(data => {
          this.isTblLoading = false;
          this.dataSource= new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        })

      }
     else if(this.selectedComplet==='טופלה'){
      this.requserCustomerService.getAllReqByCompletTrue().subscribe(data => {
        this.isTblLoading = false;
        this.dataSource= new MatTableDataSource(data);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      })

      }
      else if(this.selectedComplet==='הכל'){
        this.requserCustomerService.getAllRequestCustomers().subscribe(data => {
          this.isTblLoading = false;
          this.dataSource= new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        })
      }
      else{
        this.requserCustomerService.getAllRequestCustomers().subscribe(data => {
          this.isTblLoading = false;
          this.dataSource= new MatTableDataSource(data);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        })
      }
     
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
        this.requserCustomerService.deleteRequestCustomerbyid(row.id).subscribe(res =>{
          if(res){
            this.getAllRequsetCustomers();
            Swal.fire('מחוק!', row.id+' נמחק.', 'success');                
          }
        }) 
      }
      this.getAllRequsetCustomers();
    });    

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
  ToGoogleChars(){
    this.router.navigate(['/admin/googleCharsToAllReq'])
  }
}
