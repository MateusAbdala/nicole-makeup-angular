import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-models-data',
  templateUrl: './models-data.component.html',
  styleUrls: ['./models-data.component.scss']
})
export class ModelsDataComponent implements OnInit {

  private models: Array<any> = [];

  constructor(
    private galleryService: GalleryService,
    private _lightbox: Lightbox
  ) { }

  ngOnInit(): void {
    this.fetchModels();
  }

  fetchModels(): void {
    this.galleryService.getModelsImages().subscribe((resp: any) => this.models = resp);
  }

  open(index: number): void {
    let models: any = this.models.map(i => { return { src: i.src } });
    this._lightbox.open(models, index, { wrapAround: true, showImageNumberLabel: true, albumLabel: 'Imagem %1 de %2' });
  }

  close(): void {
    this._lightbox.close();
  }
}
