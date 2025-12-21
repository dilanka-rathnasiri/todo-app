import { Component, computed, Signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TodoItem } from '../models/todo-item';
import { StatusBadge } from '../status-badge/status-badge';
import { DataStoreServices } from '../services/data-store-services';

@Component({
    selector: 'app-item-detail',
    imports: [StatusBadge, RouterLink],
    templateUrl: './item-detail.html',
    styleUrl: './item-detail.scss',
})
export class ItemDetail {
    id: number = 0;

    itemIndex: Signal<number> = computed(() => {
        this.id = Number(this.route.snapshot.paramMap.get('id'));
        const todoItems = this.dataStoreServices.getTodoItems()();
        return todoItems.findIndex((item) => item.id === this.id);
    });

    item: Signal<TodoItem> = computed(() => {
        const todoItems = this.dataStoreServices.getTodoItems()();
        if (this.itemIndex() !== -1) {
            return todoItems[this.itemIndex()];
        }

        // Use dummy TodoItem to avoid null checks in the template
        return {
            id: 0,
            title: '',
            description: '',
            completed: false,
        };
    });

    constructor(
        private route: ActivatedRoute,
        private dataStoreServices: DataStoreServices
    ) {}

    markCompleted(): void {
        this.dataStoreServices.modifyTodoItem(this.id, { completed: true });
    }

    markUncompleted(): void {
        this.dataStoreServices.modifyTodoItem(this.id, { completed: false });
    }

    deleteItem(): void {
        const currentItem = this.item();
        this.dataStoreServices.deleteTodoItem(currentItem.id);
    }
}
