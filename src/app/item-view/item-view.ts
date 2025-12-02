import { Component, input, InputSignal } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { RouterLink } from '@angular/router';
import { StatusBadge } from '../status-badge/status-badge';

@Component({
  selector: 'app-item-view',
  imports: [RouterLink, StatusBadge],
  templateUrl: './item-view.html',
  styleUrl: './item-view.scss',
})
export class ItemView {
  item: InputSignal<TodoItem> = input.required<TodoItem>();
}
