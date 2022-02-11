/** 
 * @description 
 * O selection sort pega o menor elemento da lista e coloca na posição 0,
 * depois pega o segundo menor elemento e coloca na posição 1, e assim por diante.
 * Basta pensar que ele é exatamente o contrário do bubble sort.
 * @tutorial (https://youtu.be/9jwm_9lOHu0)
 * @returns um novo array com os valores ordenados e com o tempo de execução do algoritmo
 * */
const selectionSort = (lista: number[]): number[] => {
  const inicio = performance.now();
  const listaOrdenada: number[] = [...lista];

  for (let i = 0; i < listaOrdenada.length - 1; i++) {
    let indiceMinimo = i
    for (let j = i + 1; j < listaOrdenada.length; j++) {
      if (listaOrdenada[j] < listaOrdenada[indiceMinimo]) {
        indiceMinimo = j;
      }
    }

    [listaOrdenada[i], listaOrdenada[indiceMinimo]] = [listaOrdenada[indiceMinimo], listaOrdenada[i]];
  }

  const duracao = performance.now() - inicio;
  console.log('O selection sort levou', duracao, 'ms para ser executado');
  return listaOrdenada;
}


export default selectionSort;