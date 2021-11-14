import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model'


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [
    new Task('Task 1', 'Buy Rodrigo a Beer', 5), 
    new Task('Task 2', 'Massage Toes', 1), 
    new Task('Task 3', 'Buy Rod Snacks', 5), 
  ]

  
  constructor() { }

  ngOnInit(): void {
  }


  // Trying to add values to the list
  ListAdd(){
    var name = document.getElementById('name')
    var description = document.getElementById('description')
    var priority = document.getElementById('priority')

    //this.tasks.push( new Task(name, description, priority) )
}

}
