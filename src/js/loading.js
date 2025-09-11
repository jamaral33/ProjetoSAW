const sequencia0 = document.querySelector('#sequencia0')
const sequencia1 = document.querySelector('#sequencia1')
const sequencia2 = document.querySelector('#sequencia2')
const sequencia3 = document.querySelector('#sequencia3')
const sequencia4 = document.querySelector('#sequencia4')
const sequencia5 = document.querySelector('#sequencia5')

const sequencia0Textos = sequencia0.querySelectorAll("p")
const sequencia1Textos = sequencia1.querySelectorAll("p")
const sequencia2Textos = sequencia2.querySelectorAll("p")
const sequencia3Textos = sequencia3.querySelectorAll("p")
const sequencia4Textos = sequencia4.querySelectorAll("p")
const sequencia5Textos = sequencia5.querySelectorAll("p")

const boot = document.querySelector(".boot")
const logo = document.querySelector(".logo")
const barraCarregamento = document.querySelector("#carregamento")

const textos = [sequencia0Textos, sequencia1Textos, sequencia2Textos, sequencia3Textos, sequencia4Textos, sequencia5Textos]
console.log(sequencia1Textos[1])
let i = 0
let j = 0
let progressoBarra = 0
function revelarTexto(){
    // se o numero de itens nao superar o tamanho do objeto
    if (i < textos[j].length) {
        textos[j][i].classList.add('mostrar')
        i++
    }
    // se acabar os itens muda pra outro objeto e reseta
    else {
        j++
        i = 0
    }
    // se n acabar os objetos
    if (j < textos.length) {
        setTimeout(revelarTexto, 250)
    }
    //se acabar os objetos dentro do texto
    else{
        boot.classList.add('esconder')
        logo.style.visibility = 'visible'
        animarBarra()
    }
}
function animarBarra(){
    if(progressoBarra <= 20){
        let barraTexto = '['
        for(let i = 0; i < 20; i++){
            if(i< progressoBarra){
                barraTexto += '█';
            }
            else{
                barraTexto += '░';
            }
        }
        barraTexto += ']'
        barraCarregamento.textContent = barraTexto
        progressoBarra++
        setTimeout(animarBarra, 100)
    }
    else{
        window.location.href = "./home.html"
    }
}
 revelarTexto()

console.log(textos[1].length)