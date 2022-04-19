import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSelectModule } from '@angular/material/select';
// import { MatSortModule } from '@angular/material/sort';
// import { MatTabsModule } from '@angular/material/tabs';
// import { ComponentsModule } from '../shared/components/components.module';
import { SharedModule } from '../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import { ComponentsModule } from '../shared/components/components.module';
import { RequestTechComponent } from './request-tech/request-tech.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
// import { MatTableModule } from '@angular/material/table';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MaterialFileInputModule } from 'ngx-material-file-input';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    CustomerDetailsComponent,
    RequestTechComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    ComponentsModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    
    
  ]
})
export class CustomerModule { }
