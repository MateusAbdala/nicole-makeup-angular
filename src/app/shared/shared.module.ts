import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GridShortcutsComponent } from './grid-shortcuts/grid-shortcuts.component';
import { AppRoutingModule } from '../app-routing.module';
import { ParallaxComponent } from './parallax/parallax.component';

@NgModule({
  declarations: [SubscribeComponent, CarouselComponent, GridShortcutsComponent, ParallaxComponent],
  imports: [
    AppRoutingModule,
    CommonModule
  ],
  exports: [SubscribeComponent, CarouselComponent, GridShortcutsComponent, ParallaxComponent]
})
export class SharedModule { }
