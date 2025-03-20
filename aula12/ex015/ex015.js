function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (formAno.value.length == 0 || Number(formAno.value) > anoAtual) {
        window.alert('ERRO! Verifique os dados e tente novamente.')
    }
    else {
        var formSex = document.getElementsByName('radsex')
        var idade = anoAtual - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (formSex[0].checked) {
            genero = 'homem'

            if (idade > 0 && idade < 11) {
                // CRIANÇA
                genero = 'menino'
                img.setAttribute('src', 'menino-250px.jpg')
            }
            else if (idade < 25) {
                // JOVEM HOMEM
                genero = 'jovem homem'
                img.setAttribute('src', 'jovemhomem-250px.jpg')
            }
            else if (idade < 56) {
                // ADULTO
                img.setAttribute('src', 'fotohomem-250px.jpg')
            }
            else {
                // IDOSO
                genero = 'homem idoso'
                img.setAttribute('src', 'idoso-250px.jpg')
            }
        }
        else if (formSex[1].checked) {
            genero = 'mulher'

            if (idade > 0 && idade < 11) {
                // CRIANÇA
                genero = 'menina'
                img.setAttribute('src', 'menina-250px.jpg')
            }
            else if (idade < 25) {
                // JOVEM HOMEM
                genero = 'jovem mulher'
                img.setAttribute('src', 'jovemmulher-250px.jpg')
            }
            else if (idade < 56) {
                // ADULTA
                img.setAttribute('src', 'fotomulher-250px.jpg')
            }
            else {
                // IDOSA
                genero = 'mulher idosa'
                img.setAttribute('src', 'idosa-250px.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com idade de ${idade} anos.`
        res.appendChild(img)
    }
}