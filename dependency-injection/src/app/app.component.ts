import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dependency-injection';

  // myObservable = new Observable<number>((observer) => {
  //   console.log('Work getting started');

  //   setTimeout(() => {
  //     observer.next(Math.random());
  //   }, 1000);
  //   observer.next(Math.random());
  //   // observer.error(new Error('Some error occured!'));
  //   observer.next(Math.random());
  //   observer.complete();
  // });

  // observer = this.myObservable.subscribe(
  //   (value) => {
  //     console.log(value);
  //   },
  //   (err) => {},
  //   () => {
  //     console.log('Success!');
  //   }
  // );

  mySubject = new Subject<number>();
  observer1 = this.mySubject.subscribe({
    next: (value) => {
      console.log(`Observer: ${value}`);
    },
  });
  // observer2 = this.mySubject.subscribe({
  //   next: (value) => {
  //     console.log(`Observer: ${value}`);
  //   },
  // });

  val1 = this.mySubject.next(1);
  val2 = this.mySubject.next(2);

  // Create two components
  // Component 1:
  //   1 form:
  //     label: name
  //     Input: name
  //     submit: button

  // Component 2:
  //   You've entered {{  }}
}
