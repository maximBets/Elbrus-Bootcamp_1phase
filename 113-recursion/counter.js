function counter(n, max) {
  if (n > 0) {
    counter(n - 1);
    console.log(n);
  }
  if (n === 0) {
    console.log('boom!');
  }
}

counter(3);
