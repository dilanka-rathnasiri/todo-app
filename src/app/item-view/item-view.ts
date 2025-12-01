import { Component, input, InputSignal } from '@angular/core';
import { TodoItem } from '../models/todo-item';

@Component({
  selector: 'app-item-view',
  imports: [],
  templateUrl: './item-view.html',
  styleUrl: './item-view.scss',
})
export class ItemView {
  item: InputSignal<TodoItem> = input.required<TodoItem>();
}
