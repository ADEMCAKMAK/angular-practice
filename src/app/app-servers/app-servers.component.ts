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
  status : string = "event not triggered.";
  serverName : string = "test";
  created : boolean = false;

  constructor() {
    setTimeout(()=> { this.allowedNewServer = true;}, 3000)
  }

  getAllowedNewServer(){
    return this.allowedNewServer;
  }

  onCreateServer(){
    this.status = "event is triggered.";
    this.allowedNewServer = false;
    this.created = true;
  }

  onUpdateServerName(event : Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  isCreated(){
    return this.created;
  }

  ngOnInit(): void {
  }

}
