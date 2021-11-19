import {Injectable} from '@angular/core';
import {Task} from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: Task[] = this.getTasks();

  constructor() {  }

  getTasks(): Task[] {
    this.tasks =  JSON.parse(localStorage.getItem('tasks') ?? '[]');
    return this.tasks;
  }

  /**
   * add task to the local array and save it to the localStorage
   * @param task Object
   */
  addTask(task: Task): void {
    task.task_no = this.tasks.length + 1;
    this.tasks.push(task);
    this.persistData();
    console.log('data is in local storage');
  }

  /**
   * This method add a completed field to a given task in the form of current data
   * @param task: this is the task object. A line in the table
   */
  completeTask(task: Task): void {
    // creating a copy of the object an assign it with the completed date
    const completedTask = {
      ...task,
      completed: new Date()
    };
    // finding the object in the table - that's way I've created a copy of the object cause if I wouldn't,
    // I could never find the new object      in the table since it doesn't exist'
    const indexOf = this.tasks.indexOf(task);
    // replacing the old object (not completed) with the new object (completed - has a date of completation)
    this.tasks[indexOf] = completedTask;
  }

  getSuggestion(search: string): Task[] {
    if (search.length > 3) {
      return this.tasks.filter(task => task.title.includes(search));
    }
    return [];
  }

  editTask(task: Task): void {
    // take the task ID
    const taskId = task.task_no;
    // assign the new task in the place of the old
    this.tasks[taskId - 1] = task;
    // save it to local storage
    this.persistData();
   }

  /**
   * save to local storage
   */
  persistData(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  deleteTask(index: number): void {
    this.tasks.splice(index , 1);
    this.persistData();

  }

  clearData(): void {
    this.tasks = [];
    localStorage.clear();
  }


}
