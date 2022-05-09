import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Technician } from 'src/app/beans/technician';
import { TechnicianService } from 'src/app/services/technician.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profile-technician',
  templateUrl: './update-profile-technician.component.html',
  styleUrls: ['./update-profile-technician.component.sass']
})
export class UpdateProfileTechnicianComponent implements OnInit {
  breadscrums = [
    {
      title: 'עתקון פרטים שלי',
      items: ['תכנאי'],
      active: 'עתקון פרטים שלי',
    },
  ];
  hide = true;
  updateprofileTechnician:Technician=new Technician();
  technicianForm: FormGroup;
  idrow:number;
  technicianId:number;

  constructor(private fb: FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private technicianService:TechnicianService
    ) {
      this.technicianForm = this.fb.group({
      });
      this.technicianForm.addControl("password", new FormControl('', [Validators.required]))

  }

  ngOnInit(): void {
    const storedItems= JSON.parse(localStorage.getItem('currentUser'))
     this.technicianId=storedItems.id;
    this.technicianService.getTechnicianById(this.technicianId).subscribe(data=>{
      this.updateprofileTechnician=data;
    })


  }

  UpdateProfileTechnician(){
    const storedItems= JSON.parse(localStorage.getItem('currentUser'))
    Swal.fire({
      title: " עדכון",
      text: " אתה רוצה לעדעכן?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor:'#d33' ,
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'כן',
    }).then((result) => {
      if (result.value) {            
        this.technicianService.updateTechnician(this.updateprofileTechnician).subscribe(res =>{
          if(res){

            this.router.navigate(['/technician/technicianDetails'])
            Swal.fire('עודכן!', storedItems.name+' עודכן.', 'success');

          }
        }) 
      }
    });    
}


  backToList(){
    this.router.navigate(['/technician/technicianDetails'])  
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
   
        this.updateprofileTechnician.image= e.target.result as string;
        console.log(this.updateprofileTechnician.image);
        

      
      }
      reader.readAsDataURL(file)
    }
  }

}
