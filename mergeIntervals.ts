// 6.1 Merge Intervals: Write a function that takes an array of intervals (each interval represented as [start, end]) and merges overlapping intervals. Example: Input: [[1,3],[2,6],[8,10],[15,18]] Output: [[1,6],[8,10],[15,18]]

// 6.2 Fibonacci Sequence: Write a function to generate the first n numbers in the Fibonacci sequence. Example: Input: 5 Output: [0, 1, 1, 2, 3]

type timingTuple = [number, number];

const mergeOverlappingIntervals = (intervals: timingTuple[]): timingTuple[] => {
  intervals.sort((a, b) => a[0] - b[0]);
  // console.log(intervals)

  const mergedIntervals = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const previousInterval = mergedIntervals[mergedIntervals.length - 1];

    if (currentInterval[0] <= previousInterval[1]) {
      previousInterval[1] = Math.max(previousInterval[1], currentInterval[1]);
    } else {
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
};

const generateFibonacci = (n: number): number[] => {
  if (n <= 0) {
    return [];
  }
  const fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextNumber = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(nextNumber);
  }

  return fibonacci;
};

const intervals: timingTuple[] = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

const mergedIntervals = mergeOverlappingIntervals(intervals);

console.log(mergedIntervals);

const fibonacciSequence = generateFibonacci(10);
console.log(fibonacciSequence);
