import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LightboxModule } from 'ngx-lightbox';
import { InstitutionalService } from './services/institutional.service';
import { GalleryService } from './services/gallery.service';
import { BeautyServicesService } from './services/beauty-services.service';
import { CntService } from './services/cnt.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule
  ],
  providers: [
    CntService,
    BeautyServicesService,
    GalleryService,
    InstitutionalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
