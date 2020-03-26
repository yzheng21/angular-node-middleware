import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {

  todos;
  constructor() {}

  fetchBookList() {
    return fetch('/dep/todos', {
      method: 'GET'
    })
    .then(res => res.json());
  }

  ngOnInit() {
    this.fetchBookList().then(res => this.todos = res);
  }

}
