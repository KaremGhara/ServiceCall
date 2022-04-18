import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TechnicianService } from '../../services/technician.service';
import { MatDialog } from '@angular/material/dialog';
import { Technician } from 'src/app/beans/technician';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-technician',
  templateUrl: './all-technician.component.html',
  styleUrls: ['./all-technician.component.sass']
})
export class AllTechnicianComponent implements OnInit {
  breadscrums = [
    {
      title: 'Show technician',
      items: ['technician'],
      active: 'Show technician',
    },
  ];
  techinician:Technician[];
  isTblLoading = true;
  displayedColumns=['action','jobRole','workerType','address','email','phone','socialId','name']
  techinicianDatabase: TechnicianService | null;
  dataSource:MatTableDataSource<Technician>;
  selection = new SelectionModel<Technician>(true, []);


  constructor(private router: Router,
    private techinicianService:TechnicianService, 
    public dialog: MatDialog) { }
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.getAllTechinician();
  }

  addTechinician(){
    // this.router.navigate(['/addTechnician'])
  }
  getAllTechinician(){
    this.techinicianService.getAllTechnician().subscribe(data => {
      this.isTblLoading = false;
      this.dataSource= new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })
  }


  deleteTechnician(row) {
        
    // Swal.fire({
    //   title: "?אתה בטוח רוצה למחוק ",
    //   text: row.name,
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor:'#d33' ,
    //   cancelButtonColor: '#3085d6',
    //   confirmButtonText: 'כן',
    // }).then((result) => {
    //   if (result.value) {            
    //     this.techinicianService.deleteTechnician(row.id).subscribe(res =>{
    //       if(res){
    //         this.getAllTechinician();
    //         Swal.fire('מחוק!', row.name+' נמחק.', 'success');                
    //       }
    //     }) 
    //   }
    //   this.getAllTechinician();
    // });    

}


AboutTechnician(row){
  // this.router.navigate([ProgramManagerURL+'/details',id])
}


updateTechnician(row){
  // this.router.navigate([ProgramManagerURL+'/edit-program',id])
}
}
