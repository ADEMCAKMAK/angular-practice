import { Component } from '@angular/core';
import {style,trigger,state, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted',style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300))/*,
      transition('highlighted => normal', animate(800))*/
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted',style({ 
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken',style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.6)'
      })),
      transition('normal <=> highlighted', animate(300))/*,
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', animate(300, style({
        borderRadius: '50px'
      })))*/,
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange' 
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 2,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          opacity: 1,
          transform: 'translateX(100px)'
        }))
      ])
    ]),
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(300, style({
            opacity: 1,
            transform: 'translateX(100px)'
          }))
        ])
      ])
    ])
  ]
})
export class AppComponent {

  state = 'normal'
  wildState = 'normal'
  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }

    onDelete(it) {
      this.list.forEach( (item, index) => {
        if(item === it) this.list.splice(index,1);
      });
    }

    onanimate() {
      this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
      this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
    }

    onshrink() {
      this.wildState = 'shrunken'
    }

    animationStarted(event) {
        console.log(event);
    }

    animationEnded(event) {
      console.log(event);
    }
}


