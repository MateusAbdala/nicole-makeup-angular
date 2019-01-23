import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { Lightbox } from 'ngx-lightbox';
import { GalleryImage } from 'src/app/shared/models/galleryImage.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-models-data',
  templateUrl: './models-data.component.html',
  styleUrls: ['./models-data.component.scss']
})
export class ModelsDataComponent implements OnInit {

  private models: Array<GalleryImage> = [];

  constructor(
    private galleryService: GalleryService,
    private _lightbox: Lightbox,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.fetchModels();
  }

  fetchModels(): void {
    this.galleryService.getModelsImages().subscribe((resp: Array<GalleryImage>) => this.models = resp);
  }

  drop(event: any): void {
    this.moveItemInArray(this.models, event.previousIndex, event.currentIndex);
    this.galleryService.updateModels(this.models).subscribe(
      (resp) => {
        this.toastr.success('Lista Atualizada!', 'Modelos');
        console.log(resp);
      },
      (error: Error) => {
        this.toastr.error(error.message, 'Modelos');
      }
    );
  }

  moveItemInArray(array: Array<any>, old_index: number, new_index: number): Array<any> {
    if (new_index >= array.length) {
      let k = new_index - array.length + 1;
      while (k--) {
        array.push(undefined);
      }
    }
    array.splice(new_index, 0, array.splice(old_index, 1)[0]);
    return array;
  };

  open(index: number): void {
    let models: Array<any> = this.models.map(i => { return { src: i.src } });
    this._lightbox.open(models, index, { wrapAround: true, showImageNumberLabel: true, albumLabel: 'Imagem %1 de %2' });
  }

  close(): void {
    this._lightbox.close();
  }
}
