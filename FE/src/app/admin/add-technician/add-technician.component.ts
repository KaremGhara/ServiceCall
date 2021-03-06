import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Technician } from 'src/app/beans/technician';
import { TechnicianService } from 'src/app/services/technician.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-technician',
  templateUrl: './add-technician.component.html',
  styleUrls: ['./add-technician.component.sass']
})
export class AddTechnicianComponent implements OnInit {
  breadscrums = [
    {
      title: 'הוספת טכנאי',
      items: ['טכנאי'],
      active: 'הוספת טכנאי',
    },
  ];

  hide = true;
  newtechnician: Technician = new Technician();
  TechnicianForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router, 
    private technicianService: TechnicianService,
        
       ) {
    this.TechnicianForm = this.fb.group({
    });
    this.TechnicianForm.addControl("name", new FormControl('', [Validators.required]))
    this.TechnicianForm.addControl("socialId",new FormControl('', [Validators.required, Validators.minLength(9),Validators.maxLength(9)]))
    this.TechnicianForm.addControl("phone",new FormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]))
    this.TechnicianForm.addControl("address", new FormControl('', [Validators.required]))
    this.TechnicianForm.addControl("email",new FormControl('',[Validators.required, Validators.email]))
    this.TechnicianForm.addControl("jobRole", new FormControl('', [Validators.required]))
    this.TechnicianForm.addControl("password", new FormControl('', [Validators.required]))

}

  ngOnInit(): void {
  }
  addTechinician(){
    this.technicianService.addTechnician(this.newtechnician).subscribe(
      res=>{
        if(res){
        
          
          Swal.fire({
            icon: 'success',
            title: 'נרשם ',
            text: 'נרשם התכנאי בהצלחה ',

        }

        
        );
        this.router.navigate(['/admin/allTechnician'])
        }
      }
    )
  }

  async onFileInput()
  {
    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Upload your profile picture'
      }
    })
    
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
   
        this.newtechnician.image= e.target.result as string;
        console.log(this.newtechnician.image);
        

      
      }
      reader.readAsDataURL(file)
    }
  }

  
  backToList(){
    this.router.navigate(['/admin/allTechnician'])
  }
}
