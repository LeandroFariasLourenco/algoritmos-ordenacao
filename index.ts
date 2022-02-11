import selectionSort from './sorts/selection-sort';
import bubbleSort from './sorts/bubble-sort';
import insertionSort from './sorts/insertion-sort';
import quickSort from './sorts/quick-sort';

const arrayOrdenado = (new Array(1000) as any).fill(300).map((vl, i, arr) => i);
const arrayAleatorio = (new Array(1000) as any).fill(300).map((vl, i, arr) => Math.floor(Math.random() * 10000));

// const array = arrayOrdenado;
const array = arrayAleatorio;

console.log('--------------------------------------------------------------');
selectionSort(array);
bubbleSort(array);
insertionSort(array);

const inicio = performance.now();
quickSort(array);
const duracao = performance.now() - inicio;
console.log('O quick sort levou', duracao, 'ms para ser executado');