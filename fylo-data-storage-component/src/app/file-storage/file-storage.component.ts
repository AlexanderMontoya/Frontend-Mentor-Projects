import { Component,Input, EventEmitter, Output } from '@angular/core';
import { StorageService } from '../storage.service';
import { Item } from '../item';
@Component({
  selector: 'app-file-storage',
  templateUrl: './file-storage.component.html',
  styleUrls: ['./file-storage.component.scss']
})
export class FileStorageComponent {
  constructor(public storageService: StorageService){}
  files:Item[]=this.storageService.file_storage;
  @Input() showFiles?:boolean;
  @Output() showFilesChange=new EventEmitter<boolean>();
  cerrar(){
    this.showFilesChange.emit(false);
  }
}
