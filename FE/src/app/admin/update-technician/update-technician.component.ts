import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Technician } from 'src/app/beans/technician';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-update-technician',
  templateUrl: './update-technician.component.html',
  styleUrls: ['./update-technician.component.sass']
})
export class UpdateTechnicianComponent implements OnInit {
  breadscrums = [
    {
      title: 'Update technician',
      items: ['technician'],
      active: 'Update technician',
    },
  ];

  updateTechnician:Technician=new Technician();
  TechnicianForm: FormGroup;
  idrow:number;

  constructor(private fb: FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private technicianService:TechnicianService
    ) {
      this.TechnicianForm = this.fb.group({
      });
      this.TechnicianForm.addControl("name", new FormControl('', [Validators.required]))
      this.TechnicianForm.addControl("socialId",new FormControl('', [Validators.required, Validators.minLength(9),Validators.maxLength(9)]))
      this.TechnicianForm.addControl("phone",new FormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]))
      this.TechnicianForm.addControl("address", new FormControl('', [Validators.required]))
      this.TechnicianForm.addControl("email",new FormControl('',[Validators.required, Validators.email]))
      this.TechnicianForm.addControl("workerType", new FormControl('', [Validators.required]))
      this.TechnicianForm.addControl("jobRole", new FormControl('', [Validators.required]))
  }

  ngOnInit(): void {
    this.idrow=this.route.snapshot.params['idrow'];
    this.technicianService.getTechnicianById(this.idrow).subscribe(data=>{
      this.updateTechnician=data;
    })


  }



  updateTechinician(){
    this.technicianService.updateTechnician(this.updateTechnician).subscribe(
      res=>{
        if(res){
          this.router.navigate(['/admin/allTechnician'])        }
      }
    )
  }


  backToList(){
    this.router.navigate(['/admin/allTechnician'])
  }
}
