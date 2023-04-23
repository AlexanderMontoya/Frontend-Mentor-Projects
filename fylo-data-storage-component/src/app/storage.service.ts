import { Injectable } from '@angular/core';
import { Item } from './item';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  file_storage:Item[]=[];
  directory_storage:Item[]=[];

  addFile(file:Item){
    this.file_storage.push({name: ""+file.name, size: file.size, type: file.type})
  }
  addFolder(folder:Item){
    this.directory_storage.push(folder);
  }

  async processDirectory(directory: any): Promise<Item[]> {
    const reader = directory.createReader();
    let hijos: Item[] = [];
    
    const entries = await new Promise<any[]>((resolve) => {
      reader.readEntries(resolve);
    });
    
    for (const entry of entries) {
      if (entry.isFile) {
        const file = await new Promise<File>((resolve) => {
          entry.file(resolve);
        });
        
        hijos.push({ name: ""+file?.name, size: this.bytesTo(file?.size), type: 'file' });
      } else if (entry.isDirectory) {
        hijos.push({ name: ""+entry?.name, type: 'directory', hijos: await this.processDirectory(entry) });
      }
    }
    
    return hijos;
  }

  /*Funcion para transformar bytes*/
  bytesTo(bytes:any){
    const kilobytes=parseInt(bytes) /1024;
    if(kilobytes>=1024){
      return (kilobytes / 1024).toFixed(0)+" MB";
    }else{
      return kilobytes.toFixed(0)+" KB";
    }
  }
}
