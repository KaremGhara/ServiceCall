import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Technician } from 'src/app/beans/technician';
import { TechnicianService } from 'src/app/services/technician.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-technician',
  templateUrl: './update-technician.component.html',
  styleUrls: ['./update-technician.component.sass']
})
export class UpdateTechnicianComponent implements OnInit {
  breadscrums = [
    {
      title: 'עתקון טכנאי',
      items: ['טכנאי'],
      active: 'עתקון טכנאי',
    },
  ];
  hide = true;
  updateTechnician:Technician=new Technician();
  TechnicianForm: FormGroup;
  idrow:number;

  constructor(
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private technicianService:TechnicianService
    ) {
      this.TechnicianForm = this.fb.group({
      });
      this.TechnicianForm.addControl("name",new FormControl({value: this.updateTechnician.userName,disabled:false}))
      this.TechnicianForm.addControl("socialId",new FormControl('', [Validators.required, Validators.minLength(9),Validators.maxLength(9)]))
      this.TechnicianForm.addControl("phone",new FormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]))
      this.TechnicianForm.addControl("address", new FormControl('', [Validators.required]))
      this.TechnicianForm.addControl("email",new FormControl('',[Validators.required, Validators.email]))
      this.TechnicianForm.addControl("jobRole", new FormControl('', [Validators.required]))
      this.TechnicianForm.addControl("password", new FormControl('', [Validators.required]))

  }

  ngOnInit(): void {
    this.idrow=this.route.snapshot.params['idrow'];
    this.technicianService.getTechnicianById(this.idrow).subscribe(data=>{
      this.updateTechnician=data;
    })


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
   
        this.updateTechnician.image= e.target.result as string;
        console.log(this.updateTechnician.image);
        

      
      }
      reader.readAsDataURL(file)
    }
  }

 
  updateTechinician(){
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
        this.technicianService.updateTechnician(this.updateTechnician).subscribe(res =>{
          if(res){

            this.router.navigate(['/admin/allTechnician'])
            Swal.fire('עודכן!', storedItems.name+' עודכן.', 'success');

          }
        }) 
      }
    });    
}


  backToList(){
    this.router.navigate(['/admin/allTechnician'])
  }
}
