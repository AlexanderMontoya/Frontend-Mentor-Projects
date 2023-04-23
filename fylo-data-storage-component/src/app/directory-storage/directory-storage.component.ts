import { Component,Input, EventEmitter, Output} from '@angular/core';
import { StorageService } from '../storage.service';
import { Item } from '../item';
@Component({
  selector: 'app-directory-storage',
  templateUrl: './directory-storage.component.html',
  styleUrls: ['./directory-storage.component.scss']
})
export class DirectoryStorageComponent {
  constructor (public storageService: StorageService){}
  folders:Item[]=this.storageService.directory_storage;
  @Input() showDirectories?:boolean;
  @Output() showDirectoriesChange=new EventEmitter<boolean>();
  cerrar(){
    this.folders=this.storageService.directory_storage;
    this.showDirectoriesChange.emit(false);
  }

  verFolder(i: number) {
    const folder = this.folders[i];
    if (folder.hijos) {
      this.folders = folder.hijos;
    }
  }
}
