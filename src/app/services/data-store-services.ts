import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { DataGetServices } from './data-get-services';

@Injectable({
  providedIn: 'root',
})
export class DataStoreServices {
  private todoItems: WritableSignal<TodoItem[]> = signal([]);
  private maxId: Signal<number> = computed(() => {
    if (this.todoItems().length === 0) {
      return 0;
    }
    return this.todoItems()
      .map((item) => item.id)
      .reduce((n1, n2) => Math.max(n1, n2));
  });

  constructor(private dataGetServices: DataGetServices) {
    this.loadTodoItems();
  }

  public loadTodoItems(): void {
    this.dataGetServices.getTodoItems<TodoItem>('assets/data.json').subscribe((data) => {
      this.todoItems.set(data);
    });
  }

  public getTodoItems(): Signal<TodoItem[]> {
    return this.todoItems.asReadonly();
  }

  public modifyTodoItem(id: number, updatedItem: Partial<TodoItem>): void {
    this.todoItems.update((items) =>
      items.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)),
    );
  }

  public addTodoItem(item: Omit<TodoItem, 'id'>): void {
    const newId = this.maxId() + 1;
    const newItem: TodoItem = { ...item, id: newId };
    this.todoItems.update((items) => [...items, newItem]);
  }

  public deleteTodoItem(id: number): void {
    this.todoItems.update((items) => items.filter((item) => item.id !== id));
  }
}
