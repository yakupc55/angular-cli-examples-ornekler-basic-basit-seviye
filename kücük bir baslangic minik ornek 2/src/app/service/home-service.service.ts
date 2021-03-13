import { Identifiers } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  students = [
    {id: 101, name: "Alex", description: "alex details" , email: "alex@xyz.com"},
    {id: 201, name: "Ana", description: "Ana details" , email: "Ana@xyz.com"},
    {id: 301, name: "Sara", description: "Sara details" , email: "Sara@xyz.com"},
    {id: 401, name: "Jon", description: "Jon details" , email: "Jon@xyz.com"},]
  constructor() { }

  public getStudents(): Array<{id: any,name: any,description: any,email: any}>{
    return this.students;
  }

  public createStudent(students: {id: any,name: any,description: any,email: any}){
    this.students.push(students);
  }
  
}
