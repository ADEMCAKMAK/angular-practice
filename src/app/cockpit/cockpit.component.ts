import {Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{soname: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{soname: string, content: string}>();
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  @ContentChild('paragraphElement') paragraphElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(sn) {
    console.log(sn.value);
    this.serverCreated.emit({
      soname: sn.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(sn) {
    this.blueprintCreated.emit({
      soname: sn.value,
      content: this.serverContentInput.nativeElement.value
    });
  }

}
