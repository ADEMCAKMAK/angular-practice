import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription, Observable} from 'rxjs';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;
  private customIntervalSubscription: Subscription;
  constructor() { }

  ngOnInit() {
/*    this.firstObsSubscription = interval(1000).subscribe(
        (count) => {
          console.log(count);
        }
    );*/

    const customInterval = new Observable<number>(
        observer => {
          let count = 0;
          setInterval(() =>{
            observer.next(count++);
          }, 1000);
        }
    );

    this.customIntervalSubscription = customInterval.subscribe((data)=>{
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    // this.firstObsSubscription.unsubscribe();
    this.customIntervalSubscription.unsubscribe();
  }

}
