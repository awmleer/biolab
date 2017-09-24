import { NgModule } from '@angular/core';
import { SanitizeHtmlPipe } from './../pipes/sanitize-html/sanitize-html';

@NgModule({
  declarations: [
    SanitizeHtmlPipe,
  ],
  imports: [],
  exports: [
    SanitizeHtmlPipe,
  ]
})

export class PipesModule {}
