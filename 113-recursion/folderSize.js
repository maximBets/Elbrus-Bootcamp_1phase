// prettier-ignore
const folder = [
  [
    [5],
    8,
    9,
  ],
  [
    [10, 12],
    4,
    5,
  ],
  10,
  2,
  9,
];

function size(x) {
  // x = [[1], 2, 3]
  if (Array.isArray(x)) {
    let elementsSize = 0;
    // element = [1], 2, 3
    for (const element of x) {
      // 1+2+3
      elementsSize += size(element);
    }
    return elementsSize;
  }
  return x;
}

// const size = (x) => (Array.isArray(x) ? x.reduce((acc, el) => acc + size(el), 0) : x);

console.log(size(folder));
