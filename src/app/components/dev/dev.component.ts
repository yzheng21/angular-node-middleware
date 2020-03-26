import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {

  todos;
  constructor() {
    this.fetchBookList().then(
      res => this.todos = res
    )
  }

  fetchBookList() {
    return new Promise((resolve, reject) => {
      fetch('/dep/todos', {
        method: 'GET'
      })
      .then(res => res)
      .then(todos => resolve(todos));
    });
  }

  ngOnInit() {
  }

}
