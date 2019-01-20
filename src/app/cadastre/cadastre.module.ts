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

@NgModule({
  declarations: [
    InstitutionalDataComponent,
    CadastreComponent,
    GalleryDataComponent,
    ModelsDataComponent,
    BeautyServicesDataComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    CadastreRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CadastreModule { }