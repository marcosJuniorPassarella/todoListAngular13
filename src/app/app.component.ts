import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = 'Minhas tarefas';

  constructor() {
    this.todos.push(
      new Todo(1, 'andar de carro', false),
      new Todo(2, 'ir ao mercado', true),
      new Todo(3, 'escrever código', false),
      new Todo(4, 'reunião no trabalho', false)
    );
  }
}
