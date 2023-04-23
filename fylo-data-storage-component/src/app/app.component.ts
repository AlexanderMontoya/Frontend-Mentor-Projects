import { Component } from '@angular/core';
import { Item } from './item';
import { StorageService } from './storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public storageService: StorageService){}
  title='Fylo Data';
  subidos:boolean=false; /*Para Saber si hay elementos subidos sin repetir */

  capacidad:number=1000;
  useGB:number=815;

  upload:boolean=false;
  showFiles:boolean=false;
  showDirectories:boolean=false;

  directory_storage:Item[]=[];

  archivos:any[]=[];
  archivosActuales:Item[]=[];

  func(event:any){
    const archivosCapturado=event.target.files;
    this.archivos=[];
    for (let i = 0; i < event.target.files.length; i++) {
      console.log(archivosCapturado[i])
      if(this.storageService.file_storage.find(item=>item.name===archivosCapturado[i].name)){
        this.subidos=false;
      }else{
        this.archivos.push({name: ""+archivosCapturado[i].name, size: this.bytesTo(archivosCapturado[i].size), type:'file'});
        this.storageService.addFile(this.archivos[this.archivos.length - 1]);
        this.subidos=true;
      }
    }
    if(this.subidos){
      this.mostrarFiles();  
    }
  }

  /*Drag on drop */
  onDrop(event: DragEvent) {
    event.preventDefault();
    const items = event.dataTransfer?.items;
    this.archivos=[];
    if (!items) {
      return;
    }
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type != "") {
        const file = item.getAsFile();
        if(this.storageService.file_storage.find(item=>item.name===file?.name)){
          this.subidos=false;
        }else{
          this.archivos.push({name: ""+file?.name, size: this.bytesTo(file?.size), type:'file'});
          this.storageService.addFile(this.archivos[this.archivos.length - 1]);
          this.subidos=true;
        }
      } else if (item.type === "") {
        const entry = item.webkitGetAsEntry();
        if (entry?.isDirectory) {
          this.storageService.processDirectory(entry).then((hijos) => {
            this.storageService.addFolder({name: entry.name, type:'directory', hijos: hijos})
          });
          this.archivos.push({name: ""+entry.name, type:'directory'});
          this.subidos=true;
        }
      }
    }
    if(this.subidos){
      this.mostrarFiles();  
    }
    
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'copy';
    }
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
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

  /*Funcion para mostrar los archivos subidos */
  mostrarFiles(): void {
    this.archivos.forEach((file, index) => {
        setTimeout(() => {
          this.mostrarFile(file);
        }, (index + 1) * 1000);
    });
  }
  mostrarFile(file:Item): void {
    this.archivosActuales.push({
      name: file.name,
      size: file?.size,
      type: file.type
    });
    setTimeout(() => {
      this.archivosActuales.shift();
    }, 1500);
  }
}
