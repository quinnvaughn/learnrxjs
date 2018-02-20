const iGiveYouPromise = value => {
  return new Promise((res, rej) => {
    if (value === 4141) {
      rej('Number is too weird...');
    } else {
      setTimeout(() => {
        res('Success!');
      }, 1500);
    }
  });
};

let promise = iGiveYouPromise(151);

promise.then(
  response => {
    console.log('inside of success callback! value: ', response);
  },
  err => {
    console.log('inside of error callback! error: ', err);
  }
);
