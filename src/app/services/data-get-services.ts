import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo-item';

@Injectable({
  providedIn: 'root',
})
export class DataGetServices {
  private readonly STORAGE_KEY = 'todo-items';

  getTodoItems(): TodoItem[] {
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    if (storedData) {
      try {
        return JSON.parse(storedData) as TodoItem[];
      } catch (error) {
        console.error('Error parsing localStorage data:', error);
        return [];
      }
    }
    return [];
  }

  saveTodoItems(items: TodoItem[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }
}
