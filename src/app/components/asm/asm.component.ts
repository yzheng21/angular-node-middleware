import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asm',
  templateUrl: './asm.component.html',
  styleUrls: ['./asm.component.scss']
})
export class AsmComponent implements OnInit {

  todos;
  constructor() {}

  fetchBookList() {
    return fetch('/asm/todos', {
      method: 'GET'
    })
    .then(res => res.json());
  }

  ngOnInit() {
    this.fetchBookList().then(res => this.todos = res);
  }

}
