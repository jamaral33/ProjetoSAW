const sliderImagens = ["./src/assets/imagens/slider1.gif", "./src/assets/imagens/slider2.jpg", "./src/assets/imagens/slider3.gif"]
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