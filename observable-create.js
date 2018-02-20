import {Observable} from 'rxjs';

interface ISimpleObserver {
  next: value => void;
  error: err => void;
  complete: () => void;
}

let words = ['coding blast', 'coding', 'blast'];

let source = Observable.create(function onSubscription(
  observer: ISimpleObserver
) {
  for (let word of words) {
    observer.next(word);
  }

  observer.complete();
});

source.subscribe(next, error, complete);

function next(value) {
  console.log('next: ', value);
}

function error(err) {
  console.log('error: ', err);
}

function complete() {
  console.log('complete');
}
