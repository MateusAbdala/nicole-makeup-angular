import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitutionalDataComponent } from './institutional-data/institutional-data.component';
import { CadastreComponent } from './cadastre.component';
import { GalleryDataComponent } from './gallery-data/gallery-data.component';
import { ModelsDataComponent } from './models-data/models-data.component';
import { BeautyServicesDataComponent } from './beauty-services-data/beauty-services-data.component';
import { loginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: CadastreComponent, canActivate: [AuthGuard] },
  { path: 'institucional', component: InstitutionalDataComponent, canActivate: [AuthGuard] },
  { path: 'galeria', component: GalleryDataComponent, canActivate: [AuthGuard] },
  { path: 'modelos', component: ModelsDataComponent, canActivate: [AuthGuard] },
  { path: 'servicos', component: BeautyServicesDataComponent, canActivate: [AuthGuard] },
  { path: 'login', component: loginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastreRoutingModule { }
