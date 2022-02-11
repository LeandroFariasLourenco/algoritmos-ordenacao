import selectionSort from './sorts/selection-sort';
import bubbleSort from './sorts/bubble-sort';
import insertionSort from './sorts/insertion-sort';

console.log(new Array(2));

const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
];

selectionSort(array);
bubbleSort(array);
insertionSort(array);

