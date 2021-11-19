import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TasksService} from '../tasks.service';
import {Task} from '../task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {
  taskForm: FormGroup | undefined;
  @Output() updateTable: EventEmitter<boolean> = new EventEmitter();
  suggestions: Task[] = [];

  constructor(private formBuilder: FormBuilder, private taskServ: TasksService) {
  }

  ngOnInit(): void {
    this.createForm();
    this.getSuggestion();
    console.log(this.suggestions);

  }

  getSuggestion(): void {
    this.taskForm.controls.title.valueChanges.subscribe((title: string) => {
      this.suggestions = this.taskServ.getSuggestion(title);
    });
  }

  createForm(): void {
    this.taskForm = this.formBuilder.group({
      task_no: [''],
      title: ['', Validators.required],
      description: [''],
      priority: ['low', Validators.required],
      type: ['enrichment', Validators.required]

    });

  }

  onAddTask(): void {
    // if I don't check for that condition, the user can add an empty task
    if (this.taskForm && this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }
    // 1. add the task to the task list
    const taskObj = {
      ...this.taskForm?.value,
      created: new Date(),
    };
    this.taskServ.addTask(taskObj);
    console.log(this.taskServ.getTasks());
    // 2. informing the task-list comp. that a task was added so it can refresh the view
    this.updateTable.emit(true);

  }
}
