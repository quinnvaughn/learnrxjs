import {Observable} from 'rxjs';

Observable.interval(1000)
  .take(10)
  .subscribe(function next(value) {
    console.log('next: ', value);
  });
