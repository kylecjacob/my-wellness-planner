import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model'


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  
  constructor() { }

  ngOnInit(): void {
  }

  onTaskAdded(taskData: {newTask: string, newDescription: string, newPriority: number }){
    this.tasks.push( new Task(taskData.newTask, taskData.newDescription, taskData.newPriority));
  }

}
