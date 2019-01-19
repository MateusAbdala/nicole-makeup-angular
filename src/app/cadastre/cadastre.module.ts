import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastreRoutingModule } from './cadastre-routing.module';
import { InstitutionalDataComponent } from './institutional-data/institutional-data.component';
import { CadastreComponent } from './cadastre.component';

@NgModule({
  declarations: [InstitutionalDataComponent, CadastreComponent],
  imports: [
    CommonModule,
    CadastreRoutingModule
  ]
})
export class CadastreModule { }
