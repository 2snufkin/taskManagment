import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ClarityModule} from '@clr/angular';
import {ReactiveFormsModule} from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskAddComponent } from './task-add/task-add.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskAddComponent,
    ConfirmationComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
