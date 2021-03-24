import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl : './server.component.html',
  styles :[
    `
      p{ color : blue }
    `
  ]
})
export class ServerComponent {
  serverId : number = 10;
  status : string = "work";

  constructor() {
    this.status = Math.random() > 0.5 ? "work" : "not work";
  }

  getStatus(){
    return this.status;
  }

  getColor(){
    return this.getStatus() == "work" ? "green" : "red";
  }
}
