import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: 'sobre', component: AboutComponent, },
  { path: 'blog', component: BlogComponent, },
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
