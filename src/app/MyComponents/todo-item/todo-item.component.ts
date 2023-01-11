import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { Todo } from 'src/app/model/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('delete clicked');
  }

  onCheckboxClick(todo) {
    this.todoCheckbox.emit(todo);
  }
}
