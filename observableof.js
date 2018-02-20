import {Observable} from 'rxjs';

let source = Observable.of('coding blast', 'badword', 'coding', 'blast').map(
  w => w + 'RxJs'
);

console.log('before subscribe');

source.subscribe(
  function next(value) {
    console.log('Subscriber - next: ', value);
  },
  function error(err) {
    console.log('Subscriber - error: ', err);
  },
  function complete() {
    console.log('Subscriber - complete');
  }
);

console.log('After subscribe');
