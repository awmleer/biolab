import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursewareListPage } from './courseware-list';

@NgModule({
  declarations: [
    CoursewareListPage,
  ],
  imports: [
    IonicPageModule.forChild(CoursewareListPage),
  ],
})
export class CoursewareListPageModule {}
