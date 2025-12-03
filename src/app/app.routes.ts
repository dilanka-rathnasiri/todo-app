import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ItemDetail } from './item-detail/item-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'item/:id', component: ItemDetail },
];
