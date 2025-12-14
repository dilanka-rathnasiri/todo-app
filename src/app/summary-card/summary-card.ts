import { Component, computed, Signal } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { DataStoreServices } from '../services/data-store-services';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.html',
})
export class SummaryCard {
  items: Signal<TodoItem[]> = computed(() => this.dataStoreServices.getTodoItems()());

  constructor(private dataStoreServices: DataStoreServices) {}

  completedCount: Signal<number> = computed(
    () => this.items().filter((item) => item.completed).length,
  );

  pendingCount: Signal<number> = computed(
    () => this.items().filter((item) => !item.completed).length,
  );

  progressPercentage: Signal<string> = computed(
    () => `${Math.round((this.completedCount() / this.items().length) * 100)}%`,
  );
}
