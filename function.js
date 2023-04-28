function somaNumerosPares(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        soma += array[i];
      }
    }
    return soma;
  }
  
  // Exemplo de uso da função
  const numeros = [1, 2, 3, 4, 5, 6];
  const resultado = somaNumerosPares(numeros);
  console.log(resultado); // 12