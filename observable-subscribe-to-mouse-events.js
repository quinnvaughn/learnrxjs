import {Observable} from 'rxjs';

let source = Observable.fromEvent(document, 'mousemove');

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

Observable.fromEvent(document, 'mousemove')
  .take(10)
  .forEach(function next(value) {
    console.log('next: ', value);
  });
