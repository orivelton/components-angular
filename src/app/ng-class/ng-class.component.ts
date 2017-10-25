import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

    public ngClass: boolean = true;

    public toogleBoolean () {
      this.ngClass ? this.ngClass = false : this.ngClass = true;
    }

    constructor() { }

    ngOnInit() { }
}
