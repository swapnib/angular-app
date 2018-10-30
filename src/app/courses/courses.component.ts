import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
courses;
 flag: Boolean;
  constructor(service: CourseService) {
    this.courses = service.getCourses();
    this.flag = true;
   }

  ngOnInit() {
  }

}
