function somaNumerosPares(array) {
    const numerosPares = array.filter(numero => numero % 2 === 0);
    const soma = numerosPares.reduce((acumulador, numero) => acumulador + numero, 0);
    return soma;
}
//Exemplo de uso da função
const numeros = [1, 2, 3, 4, 5, 6];
const resultado = somaNumerosPares(numeros);
console.log(resultado); //12