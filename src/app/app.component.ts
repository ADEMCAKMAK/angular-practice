import { Component } from '@angular/core';
import {fromArray} from "rxjs-compat/observable/fromArray";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showParagraph : boolean = false;
  logItems = []

  onToggleParagraph(){
    this.logItems.push(this.logItems.length+1)
    return this.showParagraph = !this.showParagraph;
  }
}
