let num = [5, 8, 2, 9, 3] // DECLARAÇÃO DE UM ARRAY/VARIÁVEL COMPOSTA
num[4] = 3 // SELECIONA UM ÍNDICE (MESMO QUE AINDA NÃO EXISTA) E ADICIONA UM VALOR A ELE
num.push(1) // "EMPURRA" UM VALOR À UM ARRAY
num.sort() // ORDENA OS VALORES DE UM ARRAY EM ORDEM CRESCENTE

console.log(num)

let pos = num.indexOf(8)
if (pos != -1) {
    console.log(`O valor está no índice ${pos}`)
}
else {
    console.log('O valor não foi encontrado no vetor!')
}