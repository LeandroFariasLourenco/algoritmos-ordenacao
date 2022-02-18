/** 
 * @description 
 * O merge sort parte do mesmo princípio do quick sort no sentido de percorrer
 * recursivamente a lista de elementos, divindo eles entre esquerda e direita.
 * O diferencial está em que, na medida que ele divide a lista em dois, os elementos
 * já são ordenados e ele segue essa lógica até o momento em que o tamanho da lista é 1,
 * e por sua natureza recursiva, no final do algoritmo, ele monta uma nova lista de baixo para cima.
 * @tutorial (https://youtu.be/x_Z9FcAPmbk)
 * @returns um novo array com os valores ordenados
 * */
const merge = (arrEsquerdo: number[], arrDireito: number[]): number[] => {
  const saida = [];
  let indiceEsquerdo: number = 0;
  let indiceDireito: number = 0;

  while (indiceEsquerdo < arrEsquerdo.length && indiceDireito < arrDireito.length) {
    const elEsquerdo = arrEsquerdo[indiceEsquerdo];
    const elDireito = arrDireito[indiceDireito];

    if (elEsquerdo < elDireito) {
      saida.push(elEsquerdo);
      indiceEsquerdo++;
      continue;
    }

    saida.push(elDireito);
    indiceDireito++;
  }

  return [...saida, ...arrEsquerdo.slice(indiceEsquerdo), ...arrDireito.slice(indiceDireito)];
}

const mergeSort = (lista: number[]): number[] => {
  if (lista.length <= 1) {
    return lista;
  }

  const indiceMeio = Math.floor(lista.length / 2);
  const arrEsquerdo: number[] = lista.slice(0, indiceMeio);
  const arrDireito: number[] = lista.slice(indiceMeio);

  return merge(
    mergeSort(arrEsquerdo),
    mergeSort(arrDireito)
  );
}


export default mergeSort;