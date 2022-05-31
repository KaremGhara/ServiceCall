import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RequsetCustomer } from 'src/app/beans/requset-customer';
import { Technician } from 'src/app/beans/technician';
import { RequserCustomerService } from 'src/app/services/requser-customer.service';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-attach-technician-to-requests',
  templateUrl: './attach-technician-to-requests.component.html',
  styleUrls: ['./attach-technician-to-requests.component.sass']
})
export class AttachTechnicianToRequestsComponent implements OnInit {
  breadscrums = [
    {
      title: 'הצטרף טכנאי',
      items: ['טכנאי'],
      active: 'הצטרף טכנאי',
    },
  ];
  technicians:Technician[];
    isTblLoading = true;

  // subs:any;
  linkForm: FormGroup;
  requestId:number
  
  constructor( 
    public technicianService: TechnicianService,
    public dialog: MatDialog,
    private requserCustomerService:RequserCustomerService
    ){}
  

  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  requsetCustomer:RequsetCustomer[] ;
  selectedRequsetId:RequsetCustomer= new RequsetCustomer;
  requestsLinked: RequsetCustomer[];

  technician:Technician =new Technician;
  requests_ids:number[] = [];
  
  ngOnInit(): void {
    }

    public findAllRequestNotLink(){
      this.requserCustomerService.getAllRequestCustomerNotLinked().subscribe(data => {    
        this.requsetCustomer=data
      })
    }


    public findRequestByTechnicianId(){
      this.requserCustomerService.findRequestByTechnicianId(this.technician.id).subscribe(data => {    
        this.requestsLinked=data
      })
    }

      
    selectRequest(id:number){
   
      this.requserCustomerService.getRequsetById(id).subscribe(data => {
        this.selectedRequsetId=data;  
    })
    }

    attachReqToTechni(){

      this.selectedRequsetId.technician=this.technician;
      this.selectedRequsetId.attach=true;
      this.requserCustomerService.updateRequsetCustomer(this.selectedRequsetId).subscribe(data => {
        this.selectedRequsetId=data;
        this.findAllRequestNotLink();
        this.findRequestByTechnicianId();
    })
    }


    public technicianWasSelected(technician : Technician)
    {
      this.technician=technician;
     this.findAllRequestNotLink();
     this.findRequestByTechnicianId();
    
    }
  
   
   
}
