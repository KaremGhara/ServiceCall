import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Technician } from 'src/app/beans/technician';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-technicians-selector',
  templateUrl: './technicians-selector.component.html',
  styleUrls: ['./technicians-selector.component.sass']
})
export class TechniciansSelectorComponent implements OnInit {

  stdForm: FormGroup;

  
  technicians: Technician[]=[];
  selectedTechnician: Technician = new Technician();


  @Output()
  onSchoolSelected : EventEmitter<Technician> = new EventEmitter<Technician>();

  constructor(private fb : FormBuilder,private route: ActivatedRoute, private router:Router,private technicianService: TechnicianService) {
    this.stdForm = this.fb.group({});
   }

  name =new FormControl('', [Validators.required,Validators.required]);
  ngOnInit(): void {
    this.dropListTechnician();
  }
 dropListTechnician(){
   this.technicianService.getAllTechnician().subscribe(data =>{
    this.technicians = data;
   })
 }

 selectTechnician(){
   
   this.onSchoolSelected.emit(this.selectedTechnician);

 }

}