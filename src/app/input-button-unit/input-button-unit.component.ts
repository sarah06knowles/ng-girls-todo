import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({

  selector: 'app-input-button-unit',
  template: `
     <input #inputElementRef
     [value]="title"
    (keyup.enter)="submitValue($event.target.value)">

    <button (click)="submitValue($event.target.value)">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  title = 'Hello World';
  constructor() {}

  ngOnInit(): void {}

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
