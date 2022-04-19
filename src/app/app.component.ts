import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public todos: string[] = [];
  public title: string = 'Minhas tarefas';

  ngOnInit(): void {
    this.todos.push(
      'passear com o cachorro',
      'andar a cavalo',
      'comprar um polo'
    );
  }
}
