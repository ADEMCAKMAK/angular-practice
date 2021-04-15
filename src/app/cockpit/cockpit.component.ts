import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('sc') serverCreated = new EventEmitter<{sname: string, scontent: string}>();
  @Output('bc') blueprintCreated = new EventEmitter<{sname: string, scontent: string}>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(sn) {
    console.log(sn.value);
    this.serverCreated.emit({
      sname: this.newServerName,
      scontent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      sname: this.newServerName,
      scontent: this.newServerContent
    });
  }

}
