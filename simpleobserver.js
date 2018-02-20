import {Observable, Observer} from 'rxjs';

let words = ['coding blast', 'coding', 'blast'];

let source = Observable.from(words);

class SimpleObserver implements Observer {
  next(value) {
    console.log('next: ', value);
  }

  error(err) {
    console.log('error: ', err);
  }

  complete() {
    console.log('complete');
  }
}

let observer = new SimpleObserver();

source.subscribe(observer);
