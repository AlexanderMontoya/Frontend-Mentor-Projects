import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FileStorageComponent } from './file-storage/file-storage.component';
import { DirectoryStorageComponent } from './directory-storage/directory-storage.component';

@NgModule({
  declarations: [
    AppComponent,
    FileStorageComponent,
    DirectoryStorageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
