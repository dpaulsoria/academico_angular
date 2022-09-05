import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Students } from '../../rails/interfaces/students.interface';
import { Professors } from '../../rails/interfaces/professors.interface';
import { Courses } from '../../rails/interfaces/courses.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseRoute: string = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) {
  }
  // Students
  studentsRoute: string = this.baseRoute + '/students';

  getAllStudents() {
    return this.http.get(this.studentsRoute);
  }

  postStudent(student: Students) {
    return this.http.post(this.studentsRoute, student);
  }

  getStudentById(id: number) {
    return this.http.get(this.studentsRoute + '/' + id);
  }


  getStudentByUser(user: string) {
    return this.http.get(this.studentsRoute + '/get?user=' + user);
  }

  // Professors
  professorsRoute: string = this.baseRoute + '/professors';

  getAllProfessors() {
    return this.http.get(this.professorsRoute);
  }

  postProfessor(professors: Professors) {
    return this.http.post(this.professorsRoute, professors);
  }

  getProfessorById(id: number) {
    return this.http.get(this.professorsRoute + '/' + id);
  }

  getProfessorByUser(user: string) {
    return this.http.get(this.professorsRoute + '/get?user=' + user);
  }

  // Courses
  coursesRoute: string = this.baseRoute + '/courses';

  getAllCourses() {
    return this.http.get(this.coursesRoute);
  }

  postCourse(courses: Courses) {
    return this.http.post(this.coursesRoute, courses);
  }

  getCourseById(id: number) {
    return this.http.get(this.coursesRoute + '/' + id);
  }
  getCourseByCode(code: string) {
    return this.http.get(this.coursesRoute + '/get?code=' + code);
  }
}
