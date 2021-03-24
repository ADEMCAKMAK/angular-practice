import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  username : string = "initial name";

  constructor() { }

  ngOnInit(): void {
  }

  getUserName(){
    return this.username;
  }

  getButtonEnabled(){
    return !!this.username;
  }

  onReset( event : Event){
    this.username = "";
  }
}
