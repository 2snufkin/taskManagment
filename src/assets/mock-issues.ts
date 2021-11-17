import { Task } from 'src/app/task';

export const issues: Task[] = [
  {
    task_no: 1,
    title:  'Add email validation in registration form',
    description: 'Validate the email entered in the user registration form',
    priority: 'high',
    type: 'Project'
  },
  {
    task_no: 2,
    title:  'Display the adress details of a customer',
    description: 'Add a column to display the details of the customer address in the customer list',
    priority: 'low',
    type: 'Project'
  },
  {
    task_no: 3,
    title:  'Export to CSV is not working',
    description: 'The export process of a report into CSV format throws an error',
    priority: 'high',
    type: 'Hobbies'
  },
  {
    task_no: 4,
    title:  'Locale settings per user',
    description: 'Add settings configure the locale of the current user',
    priority: 'low',
    type: 'Project'
  },
  {
    task_no: 5,
    title:  'Add new customer tutorial',
    description: 'Create a tutorial on how to add a new customer into the application',
    priority: 'high',
    type: 'Project'
  },
];
