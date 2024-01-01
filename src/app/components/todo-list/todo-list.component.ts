import { Component, ElementRef, ViewChild } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { ITodo } from '../../interfaces/itodo';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [TodoItemComponent, CdkDropList, CdkDrag],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: ITodo[] = [];
  filteredTodos: ITodo[] = [];

  selActive = false
  selAll = false
  selCompleted = false

  @ViewChild('inputTask') inputTask: ElementRef = new ElementRef({});

  drop(event: CdkDragDrop<ITodo[]>) {
    moveItemInArray(this.filteredTodos, event.previousIndex, event.currentIndex);
    this.todos = [...this.filteredTodos];
  }

  addItemTodo(task: string) {
    const input = this.inputTask.nativeElement;

    if (task.length == 0) return;

    this.todos.push({
      uid: uuidv4(),
      task: task,
      completed: false
    })

    this.filteredTodos = [...this.todos];
    input.value = '';
    input.focus();
  }

  onRemoveTodo(uid: string) {
    this.todos = this.todos.filter(item => item.uid != uid);
    this.filteredTodos = [...this.todos];
  }

  viewAll(event: MouseEvent) {
    event.preventDefault();
    this.selAll = true;
    this.selActive = false;
    this.selCompleted = false;

    this.filteredTodos = [...this.todos];
  }

  viewActive(event: MouseEvent) {
    event.preventDefault();
    this.selAll = false;
    this.selActive = true;
    this.selCompleted = false;
    this.filteredTodos = this.todos.filter(item => item.completed == false);
  }

  viewCompleted(event: MouseEvent) {
    event.preventDefault();
    this.selAll = false;
    this.selActive = false;
    this.selCompleted = true;
    this.filteredTodos = this.todos.filter(item => item.completed == true);
  }

  clearCompleted(event: MouseEvent) {
    event.preventDefault();
    this.selAll = false;
    this.selActive = false;
    this.selCompleted = false;
    this.todos = this.todos.filter(item => item.completed == false)
    this.filteredTodos = [...this.todos];
  }
}
