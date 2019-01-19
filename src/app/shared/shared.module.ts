import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GridShortcutsComponent } from './grid-shortcuts/grid-shortcuts.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { PricingComponent } from './pricing/pricing.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SubscribeComponent, CarouselComponent, GridShortcutsComponent, ParallaxComponent, PricingComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SubscribeComponent, CarouselComponent, GridShortcutsComponent, ParallaxComponent, PricingComponent]
})
export class SharedModule { }
