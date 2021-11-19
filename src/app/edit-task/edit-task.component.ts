import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  taskForm: FormGroup | undefined;
  // event emitter that inform the table to refresh
  @Output() updateTable: EventEmitter<boolean> = new EventEmitter();
  @Input() taskNo: number | null = null;

  constructor(private formBuilder: FormBuilder, private taskServ: TasksService) {
  }

  ngOnInit(): void {
    this.createForm();

  }


  createForm(): void {
    this.taskForm = this.formBuilder.group({
      task_no: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: [''],

    });

  }

  /**
   *  should: 1. create a task object from the form and call the service method to replace this task with the current
   *           2. inform the parent to stop showing me
   *           3. inform the parent to refresh the table
   */
  onEditTask(): void {
    // if I don't check for that condition, the user can add an empty task
    if (this.taskForm && this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }
    const taskObj = {
      ...this.taskForm?.value,
      task_no: this.taskNo
    };
    console.log(taskObj);
    this.taskServ.editTask(taskObj);
    // 2. informing the task-list comp. that a task was added so it can refresh the view and make me disappear
    this.updateTable.emit(true);
    this.taskNo = null;

  }


}
