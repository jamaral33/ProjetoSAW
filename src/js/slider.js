const sliderImagens = ["./src/assets/imagens/GordonTape(saw1).gif", "./src/assets/imagens/AdamScreaming(saw1).jpg", "./src/assets/imagens/AmandaBearTrap(saw1).gif"]
let mostrarEstatica = false;
const slider = document.querySelector("#slide")
let i = 0
function trocarSlide(){
    if(i >= sliderImagens.length)
    {
        i = 0
    }
    if(mostrarEstatica) {
        slider.src = "./src/assets/imagens/estatica.gif"
        mostrarEstatica = false
        setTimeout(trocarSlide, 1000)

    }
    else{
        slider.src = sliderImagens[i]
        mostrarEstatica = true
        i++
        setTimeout(trocarSlide, 3000)

    }
}
trocarSlide()