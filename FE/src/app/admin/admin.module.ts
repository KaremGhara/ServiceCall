import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AllTechnicianComponent } from './all-technician/all-technician.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { ComponentsModule } from '../shared/components/components.module';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AddTechnicianComponent } from './add-technician/add-technician.component';
import { UpdateTechnicianComponent } from './update-technician/update-technician.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { AllRequestsComponent } from './all-requests/all-requests.component';
import { AttachTechnicianToRequestsComponent } from './attach-technician-to-requests/attach-technician-to-requests.component';
import {CommonUtilsModule} from '../common-utils/common-utils.module';
import { TechniciansSelectorComponent } from './technicians-selector/technicians-selector.component';
import { AboutTechnicianComponent } from './about-technician/about-technician.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component'
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AllTechnicianComponent,
    AddTechnicianComponent,
    UpdateTechnicianComponent,
    AllCustomersComponent,
    AllRequestsComponent,
    AttachTechnicianToRequestsComponent,
    TechniciansSelectorComponent,
    AboutTechnicianComponent,
    UpdateAdminComponent,
    AdminDetailsComponent,
  ],
  imports: [CommonModule,
     AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatTabsModule,
    MatMenuModule,
    MaterialFileInputModule,
    MatProgressSpinnerModule,
    ComponentsModule,
    CommonUtilsModule,
    MatCardModule
   
    ],
})
export class AdminModule {}
