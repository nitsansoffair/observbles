import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubcscription: Subscription;

  constructor() { }

  ngOnInit() {
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;

      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.firstObsSubcscription = customIntervalObservable.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.firstObsSubcscription.unsubscribe();
  }

}
