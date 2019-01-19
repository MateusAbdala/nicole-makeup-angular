import { Component, OnInit } from '@angular/core';
import { IAlbum } from 'ngx-lightbox';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-data',
  templateUrl: './gallery-data.component.html',
  styleUrls: ['./gallery-data.component.scss']
})
export class GalleryDataComponent implements OnInit {

  private images: Array<IAlbum> = [];

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.fetchImages();
  }

  fetchImages(): void {
    this.galleryService.getImages().subscribe((resp: any) => this.images = resp);
  }
}
