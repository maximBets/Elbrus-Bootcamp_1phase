// console.log(1);
// setTimeout(() => console.log(2), 100);
// setTimeout(() => console.log(3), 100);
// setTimeout(() => console.log(4), 100);
// setTimeout(() => console.log(5), 100);
// setTimeout(() => console.log(6), 100);
// setTimeout(() => console.log(7), 100);
// setTimeout(() => console.log(8), 100);
// setTimeout(() => console.log(9), 2000);
// console.log(10);

// const boomTimeout = setTimeout(() => console.log('boom!'), 2000);
// clearTimeout(boomTimeout);

let count = 10;
const intervalForCounter = setInterval(() => {
  console.log(count);
  count -= 1;
  if (count === 0) {
    clearInterval(intervalForCounter);
  }
}, 300);
