import { Component, OnInit } from '@angular/core';
import { Lightbox, IAlbum } from 'ngx-lightbox';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private images: Array<IAlbum> = [];

  constructor(
    private galleryService: GalleryService,
    private _lightbox: Lightbox
  ) { }

  ngOnInit(): void {
    this.fetchImages();
  }

  fetchImages(): void {
    this.galleryService.getImages().subscribe((resp: any) => this.images = resp);
  }

  open(index: number): void {
    this._lightbox.open(this.images, index, { wrapAround: true, showImageNumberLabel: true });
  }

  close(): void {
    this._lightbox.close();
  }
}
