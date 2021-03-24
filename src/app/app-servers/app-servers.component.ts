import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  templateUrl : 'app-servers.component.html',
  styleUrls: ['./app-servers.component.css']
})
export class AppServersComponent implements OnInit {

  allowedNewServer : boolean = false;
  constructor() {
    setTimeout(()=> { this.allowedNewServer = true;}, 3000)
  }

  ngOnInit(): void {
  }

}
