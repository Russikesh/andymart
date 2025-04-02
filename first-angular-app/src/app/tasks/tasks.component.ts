import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basoc and advanced features of Angular.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Building first prototype',
      summary: 'Building first prototype using features of Angular.',
      dueDate: '2025-02-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare Deployment',
      summary: 'Prepare Deployment using CI/CD',
      dueDate: '2025-10-01',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
   this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
