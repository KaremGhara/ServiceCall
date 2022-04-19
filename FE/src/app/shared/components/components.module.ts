import { NgModule } from '@angular/core';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SharedModule } from '../shared.module';
import { ScreenContComponent } from 'src/app/screen-cont/screen-cont.component';

@NgModule({
  declarations: [FileUploadComponent, BreadcrumbComponent],
  imports: [SharedModule],
  exports: [FileUploadComponent, BreadcrumbComponent],
})
export class ComponentsModule {}
