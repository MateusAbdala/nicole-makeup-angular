import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-data',
  templateUrl: './gallery-data.component.html',
  styleUrls: ['./gallery-data.component.scss']
})
export class GalleryDataComponent implements OnInit {

  private images: Array<any> = [];

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

  onGetFile(event: any): void {
    this.onDropFile(event.target.files[0]);
  }

  onDropFile(file: any): void {
    this.galleryService.createMidia(file).subscribe(
      () => {
        //reload
      },
      (error) => {
        console.error(error);
      }
    );
  }

  updateImage(index: number): void {
    this.galleryService.updateMidia(this.images[index]).subscribe(
      () => {
        this.fetchImages();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteImage(index: number): void {
    this.galleryService.deleteMidia(this.images[index].id).subscribe(
      () => {
        this.fetchImages();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  open(index: number): void {
    let images: any = this.images.map(i => { return { src: i.src } });
    this._lightbox.open(images, index, { wrapAround: true, showImageNumberLabel: true, albumLabel: 'Imagem %1 de %2' });
  }

  close(): void {
    this._lightbox.close();
  }
}
