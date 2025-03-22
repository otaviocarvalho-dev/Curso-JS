let amigo = {Nome: 'Otavio',
Sexo: 'M',
Peso: 60.5,
engordar(p=0) {
    console.log('Engordou')
    this.Peso += p
}}

amigo.engordar(2)
console.log(`${amigo.Nome} pesa ${amigo.Peso}Kg`)