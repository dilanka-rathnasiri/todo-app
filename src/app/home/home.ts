import { Component, computed, Signal, OnInit, signal } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { ItemView } from '../item-view/item-view';
import { DataStoreServices } from '../services/data-store-services';

@Component({
  selector: 'app-home',
  imports: [ItemView],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  items: Signal<TodoItem[]> = signal<TodoItem[]>([]);

  constructor(private dataStoreServices: DataStoreServices) {
    this.items = this.dataStoreServices.getTodoItems();
  }

  ngOnInit(): void {
    this.dataStoreServices.loadTodoItems();
  }

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
