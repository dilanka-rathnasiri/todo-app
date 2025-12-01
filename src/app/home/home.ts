import { Component, computed, Signal, OnInit, signal, WritableSignal } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { ItemView } from '../item-view/item-view';
import { DataServices } from '../services/data-services';

@Component({
  selector: 'app-home',
  imports: [ItemView],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  items: WritableSignal<TodoItem[]> = signal<TodoItem[]>([]);

  constructor(private dataServices: DataServices) {}

  ngOnInit() {
    this.dataServices.getTodoItems<TodoItem>('assets/data.json').subscribe((data) => {
      this.items.set(data);
    });
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
