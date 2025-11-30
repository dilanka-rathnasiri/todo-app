import { Component, input } from '@angular/core';
import { TodoItem } from '../models/todo-item';

@Component({
  selector: 'app-item-view',
  imports: [],
  templateUrl: './item-view.html',
  styleUrl: './item-view.scss',
})
export class ItemView {
  item = input.required<TodoItem>();
}
