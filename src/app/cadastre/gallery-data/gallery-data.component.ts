import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { GalleryService } from 'src/app/services/gallery.service';
import { GalleryImage } from 'src/app/shared/models/galleryImage.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gallery-data',
  templateUrl: './gallery-data.component.html',
  styleUrls: ['./gallery-data.component.scss']
})
export class GalleryDataComponent implements OnInit {

  private images: Array<GalleryImage> = [];

  constructor(
    private galleryService: GalleryService,
    private _lightbox: Lightbox,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.fetchImages();
  }

  fetchImages(): void {
    this.galleryService.getImages().subscribe(
      (resp: Array<GalleryImage>) => {
        this.images = resp;
      },
      (error: Error) => {
        this.toastr.error(error.message, 'Galeria');
      }
    );
  }

  onGetFile(event: any): void {
    this.onDropFile(event.target.files[0]);
  }

  onDropFile(file: File): void {
    this.galleryService.createMidia(file).subscribe(
      () => {
        this.fetchImages();
      },
      (error: Error) => {
        this.toastr.error(error.message, 'Galeria');
      }
    );
  }

  updateImage(index: number): void {
    this.galleryService.updateMidia(this.images[index]).subscribe(
      () => {
        this.fetchImages();
      },
      (error: Error) => {
        this.toastr.error(error.message, 'Galeria');
      }
    );
  }

  deleteImage(index: number): void {
    this.galleryService.deleteMidia(this.images[index].id).subscribe(
      () => {
        this.fetchImages();
      },
      (error: Error) => {
        this.toastr.error(error.message, 'Galeria');
      }
    );
  }

  open(index: number): void {
    let images: Array<any> = this.images.map(i => { return { src: i.src } });
    this._lightbox.open(images, index, { wrapAround: true, showImageNumberLabel: true, albumLabel: 'Imagem %1 de %2' });
  }

  close(): void {
    this._lightbox.close();
  }
}
