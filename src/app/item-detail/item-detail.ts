import { Component, OnInit } from '@angular/core';
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
export class ItemDetail implements OnInit {
  item: TodoItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataStoreServices: DataStoreServices,
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = this.dataStoreServices.getTodoItemById(id);
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = this.dataStoreServices.getTodoItemById(id);
  }
}
