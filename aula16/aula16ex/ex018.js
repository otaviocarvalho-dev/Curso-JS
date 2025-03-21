let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) > 0 && Number(n) < 101) {
        return true
    }
    else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else {
        window.alert('ERRO! O valor inserido é inválido ou já está na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0 || valores.length == 1) {
        window.alert('Adicione 2 ou mais valores à lista antes de finalizar!')
    }
    else {
        res.innerHTML = ''
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML += `<p>Número de elementos na lista: ${tot}</p>`
        res.innerHTML += `<p>O maior valor da lista: ${maior}</p>`
        res.innerHTML += `<p>O menor valor da lista: ${menor}</p>`
        res.innerHTML += `<p>Todos os valores da lista somados: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores da lista: ${media}</p>`
    }
}