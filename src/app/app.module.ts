import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, PdfViewerComponent]
})
export class AppModule { }
