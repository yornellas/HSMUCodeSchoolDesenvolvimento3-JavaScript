let wish = prompt("Deseja participar da pesquisa? S/N")
let quantVezes
let contadorAlunos = 0
let menos = 0
let meio = 0
let mais = 0

while (wish == "S" | wish == "s"){
    quantVezes = prompt("Quantas vezes você utilizou o RU neste mês?")
    contadorAlunos++

    if (quantVezes < 10){
        menos++
    } else if (quantVezes >=10 && quantVezes <= 15) {
        meio++
    } else {
        mais++
    }

    wish = prompt("Deseja participar da pesquisa? S/N")
}

let percMenos = (menos * 100) / contadorAlunos
let percMeio = (meio * 100) / contadorAlunos
let percMais = (mais * 100) / contadorAlunos


document.write(contadorAlunos +" alunos foram entrevistados<br>" +percMenos +"% dos alunos utilizaram o RU menos de 10 vezes<br>" 
                +percMeio +"% dos alunos utilizaram o RU entre 10 e 15 vezes<br>" +percMais +"% dos alunos utilizaram o RU mais de 15 vezes")

