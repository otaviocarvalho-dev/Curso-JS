function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha-250px.jpg'
        document.body.style.background = '#fbad40'
    }
    else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde-250px.jpg'
        document.body.style.background = '#676a63'
    }
    else {
        img.src = 'fotonoite-250px.jpg'
        document.body.style.background = '#080d10'
    }
}