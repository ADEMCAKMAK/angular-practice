import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template:
 `<app-server></app-server>
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ['./app-servers.component.css']
})
export class AppServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
