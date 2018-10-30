import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  courses;
  getCourses() {
  this.courses = ['Math', 'Biology', 'English'];
  return this.courses;
  }
}
