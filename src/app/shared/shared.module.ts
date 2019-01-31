import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GridShortcutsComponent } from './grid-shortcuts/grid-shortcuts.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { PricingComponent } from './pricing/pricing.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [SubscribeComponent, CarouselComponent, GridShortcutsComponent, ParallaxComponent, PricingComponent],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  exports: [SubscribeComponent, CarouselComponent, GridShortcutsComponent, ParallaxComponent, PricingComponent]
})
export class SharedModule { }
