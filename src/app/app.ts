import { Component, signal } from '@angular/core';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('todo-app');
}
