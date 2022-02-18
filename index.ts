import selectionSort from './sorts/selection-sort';
import bubbleSort from './sorts/bubble-sort';
import insertionSort from './sorts/insertion-sort';
import quickSort from './sorts/quick-sort';
import mergeSort from './sorts/merge-sort';
import shellSort from './sorts/shell-sort';

const arrayOrdenado = (new Array(1000) as any).fill(300).map((vl, i, arr) => i);
const arrayAleatorio = (new Array(8000) as any).fill(300).map((vl, i, arr) => Math.floor(Math.random() * 10000));

// const array = arrayOrdenado;
const array = arrayAleatorio;

console.log('--------------------------------------------------------------');
selectionSort(array);
bubbleSort(array);
insertionSort(array);

const iniQuickSort = performance.now();
quickSort(array);
const durQuickSort = performance.now() - iniQuickSort;
console.log('O quick sort levou', durQuickSort, 'ms para ser executado');

const iniMergeSort = performance.now();
mergeSort(array);
const durMergeSort = performance.now() - iniMergeSort;
console.log('O merge sort levou', durMergeSort, 'ms para ser executado');


shellSort(array);