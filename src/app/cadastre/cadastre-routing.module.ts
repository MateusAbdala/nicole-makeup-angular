import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitutionalDataComponent } from './institutional-data/institutional-data.component';
import { CadastreComponent } from './cadastre.component';
import { GalleryDataComponent } from './gallery-data/gallery-data.component';
import { ModelsDataComponent } from './models-data/models-data.component';
import { BeautyServicesDataComponent } from './beauty-services-data/beauty-services-data.component';
import { loginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: CadastreComponent, },
  { path: 'institucional', component: InstitutionalDataComponent, },
  { path: 'galeria', component: GalleryDataComponent, },
  { path: 'modelos', component: ModelsDataComponent, },
  { path: 'servicos', component: BeautyServicesDataComponent, },
  { path: 'login', component: loginComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastreRoutingModule { }
