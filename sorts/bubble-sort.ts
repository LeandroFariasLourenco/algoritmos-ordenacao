/**
 * @description
 * O bubble sort pega o maior elemento da lista e o coloca na última posição,
 * a último posição é sempre a última posição da iteração anterior - 1.
 * Basta pensar que é o contrário do selection sort.
 * @tutorial (https://youtu.be/IAeLoGzU4RE)
 * @returns um novo array com os valores ordenados e com o tempo de execução do algoritmo
 */
const bubbleSort = (lista: number[]): number[] => {
  const inicio: number = performance.now();
  const listaOrdenada = [...lista];

  for (let i = 0; i < lista.length - 1; i++) {
    for (let j = 0; j < lista.length - 1 - i; j++) {
      if (listaOrdenada[j] > listaOrdenada[j + 1]) {
        [listaOrdenada[j], listaOrdenada[j + 1]] = [listaOrdenada[j + 1], listaOrdenada[j]];
      }
    }
  }

  const duracao: number = performance.now() - inicio;
  console.log('O bubble sort levou', duracao, 'ms para ser executado');
  return listaOrdenada;
};

export default bubbleSort;
