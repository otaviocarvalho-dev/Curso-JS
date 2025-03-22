// RECURSIVIDADE: FUNÇÃO QUE CHAMA ELA MESMA

function fatorial(n) {
    if (n != 1) {
        return n * fatorial(n - 1)
    }
    else {
        return 1
    }
}

console.log(fatorial(4))