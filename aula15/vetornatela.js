let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)
valores.sort()

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`O índice ${pos} tem o valor ${valores[pos]}`)
}

console.log('Ou...') // Esse de baixo é um código simplificado do de cima

for (let pos in valores) {
    console.log(`O índice ${pos} tem o valor ${valores[pos]}`)
}