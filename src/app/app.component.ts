import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../models/todo.model.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public mode = 'list';
  public todos: Todo[] = [];
  public title: string = 'Minhas tarefas';
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [
        '',
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.required,
        ]),
      ],
    });
    this.getTodosInLocalStorage();
  }

  addTodo() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.saveInLocalStorage();
    this.form.reset();
  }

  remove(todo: Todo) {
    // CAPTURA O INDICE DO TODO QUE RECEBEMOS POR PARÂMETRO
    const index = this.todos.indexOf(todo);
    // DELETA O ITEM DE NOSSA LISTA - ARRAY
    index !== -1 && this.todos.splice(index, 1);
    this.saveInLocalStorage();
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.saveInLocalStorage();
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
    this.saveInLocalStorage();
  }

  saveInLocalStorage() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
    this.mode = 'list';
  }

  getTodosInLocalStorage() {
    const data = localStorage.getItem('todos') as string;
    data ? (this.todos = JSON.parse(data)) : (this.todos = []);
  }

  changeMode(mode: string) {
    this.mode = mode;
  }
}
