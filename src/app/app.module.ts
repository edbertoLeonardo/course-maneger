import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { CourseListComponent } from './courses/course-list.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { NotFound404Component } from './not-found-404/not-found404.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    CourseListComponent,
    ReplacePipe,
    NavBarComponent,
    NotFound404Component,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: '',redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**', component: NotFound404Component
      }
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
