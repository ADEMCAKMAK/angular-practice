import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

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
            if( count === 2 )
              observer.complete()
            if( count > 3 )
              observer.error(new Error('count is greater than 3'));
          }, 1000);
        }
    ).pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data)=>{
          return 'Round: '+(data+1);
        })
    );

    this.customIntervalSubscription = customInterval.subscribe((data)=>{
      console.log(data);
    }, error => {
      console.log(error);
    }, () => {
      console.log('completed');
    })
  }

  ngOnDestroy(): void {
    // this.firstObsSubscription.unsubscribe();
    this.customIntervalSubscription.unsubscribe();
  }

}
