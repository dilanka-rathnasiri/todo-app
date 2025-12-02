import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { DataGetServices } from './data-get-services';

@Injectable({
  providedIn: 'root',
})
export class DataStoreServices {
  private todoItems: WritableSignal<TodoItem[]> = signal([]);

  constructor(private dataGetServices: DataGetServices) {}

  public loadTodoItems(): void {
    this.dataGetServices.getTodoItems<TodoItem>('assets/data.json').subscribe((data) => {
      this.todoItems.set(data);
    });
  }

  public getTodoItems(): Signal<TodoItem[]> {
    return this.todoItems.asReadonly();
  }

  public getTodoItemById(id: number): TodoItem | undefined {
    return this.todoItems().find((item) => item.id === id);
  }
}
