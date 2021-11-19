import {Component, OnInit} from '@angular/core';
import {Task} from '../task';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks = [];
  showList = true;
  completedTask: Task | null = null;
  editTask: Task | null = null;

  constructor(private tasksServ: TasksService) {
  }

  ngOnInit(): void {
    this.displayTasks();
  }

  displayTasks(): void {
    this.tasks = this.tasksServ.getTasks();
  }

  onConfirm($event: boolean): void {
    if (this.completedTask && $event) {
      this.tasksServ.completeTask(this.completedTask);
      this.displayTasks();
    }
    this.completedTask = null;

  }

  /**
   * responsable to react to the event emitter from the edit Task. Need  to update the view and to reset the editTask var
   * @param $event from the child
   */
  onEdit($event: boolean): void {
    if (this.editTask && $event) {
      this.displayTasks();
    }
    this.editTask = null;

  }

  clearAll(): void {
    this.tasksServ.clearData();
    this.displayTasks();
  }

  deleteTask(index: number): void {
    index--;
    this.tasksServ.deleteTask(index);
    this.displayTasks();

  }
}
