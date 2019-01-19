import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GridShortcutsComponent } from './grid-shortcuts/grid-shortcuts.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [SubscribeComponent, CarouselComponent, GridShortcutsComponent, ParallaxComponent, PricingComponent],
  imports: [
    CommonModule
  ],
  exports: [SubscribeComponent, CarouselComponent, GridShortcutsComponent, ParallaxComponent, PricingComponent]
})
export class SharedModule { }
