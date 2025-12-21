import { Component, computed, Signal, OnInit, signal } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { ItemView } from '../item-view/item-view';
import { DataStoreServices } from '../services/data-store-services';
import { AddTodo } from '../add-todo/add-todo';
import { SummaryCard } from '../summary-card/summary-card';

@Component({
    selector: 'app-home',
    imports: [ItemView, AddTodo, SummaryCard],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export class Home implements OnInit {
    items: Signal<TodoItem[]> = signal<TodoItem[]>([]);

    constructor(private dataStoreServices: DataStoreServices) {}

    ngOnInit(): void {
        this.items = this.dataStoreServices.getTodoItems();
    }

    completedCount: Signal<number> = computed(
        () => this.items().filter((item) => item.completed).length
    );

    pendingCount: Signal<number> = computed(
        () => this.items().filter((item) => !item.completed).length
    );

    progressPercentage: Signal<string> = computed(
        () => `${Math.round((this.completedCount() / this.items().length) * 100)}%`
    );
}
