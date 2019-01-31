import { Component, OnInit } from '@angular/core';
import { IAlbum, Lightbox } from 'ngx-lightbox';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  private imagesForCarousel: Array<IAlbum> = [];

  swiperConfig = {
    direction: 'horizontal',
    grabCursor: true,
    spaceBetween: 15,
    slidesPerView: 4,
    autoplay: true,
    speed: 1000,
    navigation: {
      nextEl: '.carousel-control-next',
      prevEl: '.carousel-control-prev',
    }
  };


  constructor(
    private galleryService: GalleryService,
    private _lightbox: Lightbox
  ) { }

  ngOnInit(): void {
    this.fetchImages();
  }

  fetchImages(): void {
    this.galleryService.getModelsImages().subscribe((resp: any) => this.imagesForCarousel = resp);
  }

  open(index: number): void {
    this._lightbox.open(this.imagesForCarousel, index, { wrapAround: true, showImageNumberLabel: true });
  }

  close(): void {
    this._lightbox.close();
  }

}
