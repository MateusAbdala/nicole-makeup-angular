import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastreRoutingModule } from './cadastre-routing.module';
import { InstitutionalDataComponent } from './institutional-data/institutional-data.component';
import { CadastreComponent } from './cadastre.component';
import { GalleryDataComponent } from './gallery-data/gallery-data.component';
import { ModelsDataComponent } from './models-data/models-data.component';
import { BeautyServicesDataComponent } from './beauty-services-data/beauty-services-data.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropZoneDirective } from './gallery-data/drop-zone.directive';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { loginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    InstitutionalDataComponent,
    CadastreComponent,
    GalleryDataComponent,
    ModelsDataComponent,
    BeautyServicesDataComponent,
    CategoriesComponent,
    DropZoneDirective,
    loginComponent
  ],
  imports: [
    CommonModule,
    CadastreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [AuthGuard]
})
export class CadastreModule { }
