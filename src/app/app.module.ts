import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './course.service';
import { InputFormatDirectiveDirective } from './input-format-directive.directive';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MatMenuModule} from '@angular/material';
import { AssignmentComponent } from './assignment/assignment.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
      },
  {
  path: 'post',
  component: PostsComponent
  },
  {
    path: 'course',
    component: CoursesComponent

  }
];
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    InputFormatDirectiveDirective,
    SignupFormComponent,
    PostsComponent,
    HomeComponent,
    AssignmentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatMenuModule,
    RouterModule.forRoot(routes)
   ],
  providers: [CourseService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
