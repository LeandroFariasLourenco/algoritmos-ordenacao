/** 
 * @description 
 * O quick sort é um algoritmo recursivo que divide a lista em duas partes
 * e retira um elemento para ter o papel de elemento pivô. Os valores menores
 * que o elemento pivô são posicionados na esquerda enquanto os maiores são posicionados
 * na direita e assim sucessivamente até o momento em que tanto o lado direito como esquerdo
 * permaneçam com apenas um elemento e por ser recursiva, o último retorno, que é a lista com 1
 * elemento, é utilizado para montar uma nova lista de baixo para cima com o elemento pivô sempre permanecendo
 * no meio.
 * @tutorial (https://youtu.be/P6XGSKO2RzI)
 * @returns um novo array com os valores ordenados
 * */
const quickSort = (lista: number[]): number[] => {
  const listaOrdenada: number[] = [...lista];

  if (listaOrdenada.length <= 1) {
    return listaOrdenada;
  }
  const elementoPivo = listaOrdenada[listaOrdenada.length - 1];
  const arrayEsquerdo = [];
  const arrayDireito = [];
  for (const el of listaOrdenada.slice(0, listaOrdenada.length - 1)) {
    el < elementoPivo ? arrayEsquerdo.push(el) : arrayDireito.push(el);
  }

  return [...quickSort(arrayEsquerdo), elementoPivo, ...quickSort(arrayDireito)];
}


export default quickSort;