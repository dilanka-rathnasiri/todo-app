import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../models/todo-item';
import { DataStoreServices } from '../services/data-store-services';

@Component({
    selector: 'app-add-todo',
    imports: [FormsModule],
    templateUrl: './add-todo.html',
})
export class AddTodo {
    title: WritableSignal<string> = signal('');
    description: WritableSignal<string> = signal('');
    completed: WritableSignal<boolean> = signal(false);

    constructor(private dataStoreServices: DataStoreServices) {}

    saveTodo(): void {
        const todoItem: Omit<TodoItem, 'id'> = {
            title: this.title(),
            description: this.description(),
            completed: this.completed(),
        };
        this.dataStoreServices.addTodoItem(todoItem);
        this.title.set('');
        this.description.set('');
        this.completed.set(false);
    }
}
