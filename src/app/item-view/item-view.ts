import { Component, input, InputSignal } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { RouterLink } from '@angular/router';
import { StatusBadge } from '../status-badge/status-badge';
import { DataStoreServices } from '../services/data-store-services';

@Component({
  selector: 'app-item-view',
  imports: [RouterLink, StatusBadge],
  templateUrl: './item-view.html',
  styleUrl: './item-view.scss',
})
export class ItemView {
  item: InputSignal<TodoItem> = input.required<TodoItem>();

  constructor(private dataStoreServices: DataStoreServices) {}

  toggleCompletion(): void {
    const currentItem = this.item();
    const newCompletedStatus = !currentItem.completed;
    this.dataStoreServices.modifyTodoItem(currentItem.id, { completed: newCompletedStatus });
  }
}
