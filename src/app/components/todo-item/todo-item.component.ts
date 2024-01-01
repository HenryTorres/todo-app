import { Component, EventEmitter, HostBinding, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ITodo } from '../../interfaces/itodo';

@Component({
  selector: 'todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnChanges {

  rutaCheck: string = '';

  @Input() todo: ITodo = { uid: '', task: '', completed: false };
  @Output() onRemoveTodo = new EventEmitter<string>();

  ngOnChanges(): void {
    if (this.todo.completed) {
      this.rutaCheck = '../../../assets/images/icon-check.svg';
    } else {
      this.rutaCheck = '';
    }
  }

  itemCheck() {
    this.todo.completed = !this.todo.completed;

    if (this.todo.completed) {
      this.rutaCheck = '../../../assets/images/icon-check.svg';
    } else {
      this.rutaCheck = '';
    }
  }

  removeTodo(uid: string) {
    this.onRemoveTodo.emit(uid);
  }

}
