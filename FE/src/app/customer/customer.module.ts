import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
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
import {MatCardModule} from '@angular/material/card';
import { RequestTechComponent } from './request-tech/request-tech.component';
import { MatOptionModule } from '@angular/material/core';
 import { MatTableModule } from '@angular/material/table';
 import { MatSnackBarModule } from '@angular/material/snack-bar';
import {CommonUtilsModule} from '../common-utils/common-utils.module';
import { CustomerRequestsComponent } from './customer-requests/customer-requests.component';
import { UpdateCustomerDetailsComponent } from './update-customer-details/update-customer-details.component'

@NgModule({
  declarations: [
    CustomerDetailsComponent,
    RequestTechComponent,
    CustomerRequestsComponent,
    UpdateCustomerDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
export class CustomerModule { }
