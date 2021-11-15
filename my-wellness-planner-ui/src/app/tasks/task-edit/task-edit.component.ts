import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  //This is so that we can pass it to another component!
  @Output() taskCreated = new EventEmitter<{newTask: string,newDescription:string, newPriority: number }>();

  //Going to get these values from the HTML input
  newTask = '';
  newDescription = '';
  newPriority : number;

  constructor() { }

  ngOnInit(): void {
  }

  // Action you want to provide when clicking the button
  addTask(){
    this.taskCreated.emit({newTask: this.newTask, newDescription: this.newDescription, newPriority: this.newPriority })
  }

}
