import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public linkNameHeader: Array<object> = [
    {
      "linkName":"Home",
      "router": "/",
      "title": "Link para Home"
    },

    {
      "linkName":"Input",
      "router": "/input",
      "title": "Link para Demo input"
    },

    {
      "linkName":"Progress",
      "router": "/progress",
      "title": "Link para Demo progress"
    },

    {
      "linkName":"ngClass",
      "router": "/ng-class",
      "title": "Link para Demo ngClass"
    }
  ];

  constructor() {}

  ngOnInit() { }

}
