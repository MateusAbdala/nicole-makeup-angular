import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { BlogModule } from './blog/blog.module';
import { LightboxModule } from 'ngx-lightbox';
import { InstitutionalService } from './services/institutional.service';
import { GalleryService } from './services/gallery.service';
import { BeautyServicesComponent } from './beauty-services/beauty-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    NotFoundComponent,
    BeautyServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BlogModule,
    LightboxModule
  ],
  providers: [GalleryService, InstitutionalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
