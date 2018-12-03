import { NgModule } from '@angular/core';
import { SanitizeHtmlPipe } from './../pipes/sanitize-html/sanitize-html';
import {FormatToLocalPipe} from './format-to-local.pipe';

@NgModule({
  declarations: [
    SanitizeHtmlPipe,
    FormatToLocalPipe,
  ],
  imports: [],
  exports: [
    SanitizeHtmlPipe,
    FormatToLocalPipe,
  ]
})

export class PipesModule {}
