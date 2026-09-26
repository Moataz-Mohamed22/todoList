import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-to-do',
  styleUrl: './to-do.css',
  templateUrl: './to-do.html',
})
export class ToDo {

  title: string = 'To Do List Application';

  imageLink: string =
    'https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?w=600&auto=format&fit=crop&q=60';

  tasks: string[] = [];

  newTask: string = '';

  isAvailable: boolean = false;

  editIndex: number = -1;

  addTask() {

    const task = this.newTask.trim();

    if (task === '') {
      return;
    }

    if (this.editIndex === -1) {

      // Add
      this.tasks.push(task);

    } else {

      // Update
      this.tasks[this.editIndex] = task;

      this.editIndex = -1;
    }

    this.isAvailable = this.tasks.length > 0;

    this.newTask = '';
  }

  EditTask(index: number) {

    this.editIndex = index;

    this.newTask = this.tasks[index];
  }

  RemoveTask(index: number) {

    this.tasks.splice(index, 1);

    if (this.tasks.length === 0) {
      this.isAvailable = false;
    }

 
    if (this.editIndex === index) {
      this.editIndex = -1;
      this.newTask = '';
    }
  }
}
