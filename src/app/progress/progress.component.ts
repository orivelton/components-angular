import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  public resultChange: number = 0;
  public  valueChange: Array<any> = [
    {"number": 0, "name": "Choose..."},
    {"number": 25, "name": "Value 25 %"},
    {"number": 50, "name": "Value 50 %"},
    {"number": 75, "name": "Value 75 %"},
    {"number": 100, "name": "Value 100 %"}
  ];

  public getChange (value: number) {
    this.resultChange = value;
  }

  constructor() { }

  ngOnInit() { }
}
