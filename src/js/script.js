const sliderImagens = {
    'index' : 
    ["./src/assets/imagens/slider1.gif", "./src/assets/imagens/slider2.jpg", "./src/assets/imagens/slider3.gif"],
    'InfoSaw1' :
    ["./src/assets/imagens/GordonTape(saw1).gif", "./src/assets/imagens/AdamScreaming(saw1).jpg", "./src/assets/imagens/AmandaBearTrap(saw1).gif"]
}
let pagina = window.location.pathname.replace("/ProjetoSAW/", "")
pagina = pagina.replace(".html", "")
console.log(pagina)

let mostrarEstatica = false;
const slider = document.querySelector(".slide")

let i = 0

function trocarSlide(){
    if(i >= sliderImagens[pagina].length)
    {
        i = 0
    }
    if(mostrarEstatica) {
        slider.src = "./src/assets/imagens/estatica.gif"
        mostrarEstatica = false
        setTimeout(trocarSlide, 1000)
    }
    else{
        slider.src = sliderImagens[pagina][i]
        console.log(sliderImagens[pagina][i])
        mostrarEstatica = true
        console.log(slider.src)

        i++
        setTimeout(trocarSlide, 3000)

    }
}
trocarSlide()

function inverterSeta(x){
    x.querySelector('img').classList.toggle('setaCima')
}
function trocarSubMenu(x){
    inverterSeta(x)
    x.nextElementSibling.classList.toggle('show')
}

function trocarMenu(){
    menu.classList.toggle('close')
}
console.log(sliderImagens[pagina])
