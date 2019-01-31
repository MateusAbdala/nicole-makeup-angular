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
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    LightboxModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
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
