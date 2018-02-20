import {Observable} from 'rxjs';

let promise = new Promise((resolve, reject) => {
  console.log('Promise starts');
  setTimeout(() => {
    resolve('Promise - after timeout of 1500 milliseconds!');
  }, 1500);
});

let source = Observable.create(observer => {
  console.log('Observable starts');
  setTimeout(() => {
    observer.next('Observable - after timeout of 1500 milliseconds!');
  }, 1500);
});

source.subscribe(function next(value) {
  console.log('in next, value: ', value);
});
