import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Epic } from './epic';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  epicObservable=new Subject<Epic>();

  constructor(private http :HttpClient) { }

  displayTasks()
  {
    this.getAllTasks();
    // this.epicObservable.next(epic);
  }
  getAllTasks():Observable<any>{
    return this.http.get("http://localhost:8080/tasks/viewTasks");
  }
  getEmployees():Observable<any>{
    return this.http.get("http://localhost:8080/employees/getallemployees");
  }

  getTasksofEmployee():Observable<any>{
    console.log(this.http.get("http://localhost:8080/tasks/121"));
    return this.http.get("http://localhost:8080/tasks/121");
  }

}
