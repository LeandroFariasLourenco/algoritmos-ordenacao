/** 
 * @description 
 * O shell short é um dos algoritmos mais complicados de ser entendido e implementado.
 * O algoritmo parte do princípio de comparar os valores dado uma distância variável, que normalmente
 * é utilizado a metade do array. E nas próximas iterações, ele compara se a primeira posição é maior que 
 * o elemento na distância atual, se for, ele realiza a troca. Ao final dessa iteração, a primeira posição
 * passa a ser a segunda e a que será comparada, se torna distância + 1, seguindo assim até a distância ser 
 * igual ao tamanho do array. Quando essa condição for verdadeira, ele divide a distância inicial por 2 e segue
 * novamente sua execução, e finaliza quando a distância for 1.
 * @tutorial (https://youtu.be/QnHOwrZllXk)
 * @tutorial (https://youtu.be/3yUSDJVDk4E)
 * @returns um novo array com os valores ordenados e com o tempo de execução do algoritmo
 * */
const shellSort = (lista: number[]): number[] => {
  const inicio = performance.now();
  const listaOrdenada: number[] = [...lista];
  let distancia = Math.round(listaOrdenada.length / 2);

  while (distancia > 0) {
    let j = 0;

    for (let i = distancia; i < listaOrdenada.length; i++) {
      let temp = listaOrdenada[i];
      for (j = i; j >= distancia && listaOrdenada[j - distancia] > temp; j -= distancia) {
        listaOrdenada[j] = listaOrdenada[j - distancia];
      }

      listaOrdenada[j] = temp;
    }

    distancia /= Math.round(2);
  }

  const duracao = performance.now() - inicio;
  console.log('O shell sort levou', duracao, 'ms para ser executado');
  return listaOrdenada;
}


export default shellSort;