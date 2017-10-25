import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public valuElement: string;

  public inputValue(value: string) {
    this.valuElement = value;
    console.log(value);
  }

  constructor() { }

  ngOnInit() { }
}


