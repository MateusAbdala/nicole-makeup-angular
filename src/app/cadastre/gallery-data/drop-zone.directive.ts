import { Directive, HostListener, HostBinding, EventEmitter, Output, Input } from '@angular/core';

@Directive({
  selector: '[appDropZone]'
})
export class DropZoneDirective {

  @Input() allowed_extensions: Array<string> = [];
  @HostBinding('style.background') protected background = '#f8f9fa';
  @Output() filesChangeEmiter = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event']) public onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#feecf2';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f8f9fa';
  }

  @HostListener('drop', ['$event']) public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f8f9fa';
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.filesChangeEmiter.emit(files[0]);
    }
  }

}
