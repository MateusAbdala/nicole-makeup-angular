import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BeautyServicesComponent } from './beauty-services/beauty-services.component';

const routes: Routes = [
  { path: 'cadastro', loadChildren: './cadastre/cadastre.module#CadastreModule' },
  { path: 'home', component: HomeComponent, },
  { path: 'sobre', component: AboutComponent, },
  { path: 'servicos', component: BeautyServicesComponent, },
  { path: 'galeria', component: GalleryComponent, },
  { path: 'contato', component: ContactComponent, },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'pagina-nao-encontrada', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
