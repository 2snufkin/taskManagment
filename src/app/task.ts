export interface Task {
  task_no: number;
  created?: Date;
  title: string;
  description: string;
  priority: 'low' | 'high';
  type: 'Enrichment' | 'Project' | 'Hobbies' | 'House';
  // optional: not every task is completed
  completed?: Date;


}
