/** 
 * @description 
 * O insertion sort ordena os elementos na medida em que o
 * índice inicial é incrementado. Toda vez que o índice inicial é incrementado,
 * ele percorre a lista começando do índice atual e terminando no zero. * 
 * @tutorial (https://youtu.be/Q_U71D3U23M)
 * @returns um novo array com os valores ordenados e com o tempo de execução do algoritmo
 * */
const insertionSort = (lista: number[]): number[] => {
  const inicio = performance.now();
  const listaOrdenada: number[] = [...lista];

  for (let i = 1; i < lista.length; i++) {
    for (let j = i; j > 0; j--) {
      if (listaOrdenada[j] < listaOrdenada[j - 1]) {
        [listaOrdenada[j], listaOrdenada[j - 1]] = [listaOrdenada[j - 1], listaOrdenada[j]]
        continue;
      }
      break;
    }
  }

  const duracao = performance.now() - inicio;
  console.log('O insertion sort levou', duracao, 'ms para ser executado');
  return listaOrdenada;
}


export default insertionSort;