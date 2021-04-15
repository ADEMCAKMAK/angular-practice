import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('sc') serverCreated = new EventEmitter<{sname: string, scontent: string}>();
  @Output('bc') blueprintCreated = new EventEmitter<{sname: string, scontent: string}>();
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(sn) {
    console.log(sn.value);
    this.serverCreated.emit({
      sname: sn.value,
      scontent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(sn) {
    this.blueprintCreated.emit({
      sname: sn.value,
      scontent: this.serverContentInput.nativeElement.value
    });
  }

}
