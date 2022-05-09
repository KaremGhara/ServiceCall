import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/beans/Admin';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.sass']
})
export class UpdateAdminComponent implements OnInit {
  breadscrums = [
    {
      title: 'עתקון אדמין',
      items: ['אדמין'],
      active: 'עתקון אדמין',
    },
  ];
  hide = true;
  updateAdmin:Admin=new Admin();
  AdminForm: FormGroup;
  idrow:number;
  adminId:number;

  constructor(private fb: FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private adminService:AdminService
    ) {
      this.AdminForm = this.fb.group({
      });
      this.AdminForm.addControl("name",new FormControl({value: this.updateAdmin.userName,disabled:true}))
      this.AdminForm.addControl("socialId",new FormControl('', [Validators.required, Validators.minLength(9),Validators.maxLength(9)]))
      this.AdminForm.addControl("phone",new FormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(10)]))
      this.AdminForm.addControl("address", new FormControl('', [Validators.required]))
      this.AdminForm.addControl("email",new FormControl('',[Validators.required, Validators.email]))
      this.AdminForm.addControl("password", new FormControl('', [Validators.required]))

  }

  ngOnInit(): void {
    const storedItems= JSON.parse(localStorage.getItem('currentUser'))
     this.adminId=storedItems.id;
    this.adminService.getAdminById(this.adminId).subscribe(data=>{
      this.updateAdmin=data;
    })


  }

  UpdateAdmin(){
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
        this.adminService.updateAdmin(this.updateAdmin).subscribe(res =>{
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
   
        this.updateAdmin.image= e.target.result as string;
        console.log(this.updateAdmin.image);
        

      
      }
      reader.readAsDataURL(file)
    }
  }
}
