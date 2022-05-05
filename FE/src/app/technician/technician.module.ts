import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicianRoutingModule } from './technician-routing.module';
import { TechnicianDetailsComponent } from './technician-details/technician-details.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonUtilsModule } from '../common-utils/common-utils.module';
import { CustomerRoutingModule } from '../customer/customer-routing.module';
import { ComponentsModule } from '../shared/components/components.module';
import { SharedModule } from '../shared/shared.module';
import { AnswerTechnicianComponent } from './answer-technician/answer-technician.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { UpdateProfileTechnicianComponent } from './update-profile-technician/update-profile-technician.component';


@NgModule({
  declarations: [
    TechnicianDetailsComponent,
    AnswerTechnicianComponent,
    MyRequestsComponent,
    UpdateProfileTechnicianComponent
  ],
  imports: [
    CommonModule,
    TechnicianRoutingModule,
    FormsModule,
    CustomerRoutingModule,
    SharedModule,
    ComponentsModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    CommonUtilsModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    FormsModule,
    MatTableModule,
    MatSnackBarModule

  ]
})
export class TechnicianModule { }
