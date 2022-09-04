import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-time',
  templateUrl: './course-time.component.html',
  styleUrls: ['./course-time.component.css']
})
export class CourseTimeComponent implements OnInit {

  
  @Input() label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
