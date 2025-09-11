const sliderImagens = {
    'index' : 
    ["./src/assets/imagens/slider1.gif", "./src/assets/imagens/slider2.jpg", "./src/assets/imagens/slider3.gif"],
    
    'InfoSaw1' :
    ["./src/assets/imagens/GordonTape(saw1).gif", "./src/assets/imagens/saw1Slide2", "./src/assets/imagens/AmandaBearTrap(saw1).gif"],
    'infoSaw2':
    ["./src/assets/imagens/saw2Slide1.gif", "./src/assets/imagens/saw2Slide2.gif", "./src/assets/imagens/saw2Slide3.gif"],

    'InfoSaw3':
    ["./src/assets/imagens/saw3Slide1.gif", "./src/assets/imagens/slider1.gif", "./src/assets/imagens/saw3Slide2.gif"],

    'infoSaw4':
    ["./src/assets/imagens/saw4slide1.gif", "./src/assets/imagens/saw4slide2.gif", "./src/assets/imagens/saw4slide3.gif"],

    'infoSaw6':
    ["./src/assets/imagens/saw6Slide2.gif", "./src/assets/imagens/saw6Slide1.gif", "./src/assets/imagens/saw6Slide3.gif"],
    'InfoSawFinal':
    ["./src/assets/imagens/sawOFinalSlide3.webp", "./src/assets/imagens/sawOFinalSlide2.webp", "./src/assets/imagens/sawOFinalSlide1.webp"],
    'infoSawX':
    ["./src/assets/imagens/sawXslide1.gif", "./src/assets/imagens/sawXslide2.gif", "./src/assets/imagens/sawXslide3.gif"],
}

let pagina = window.location.pathname.replace("/ProjetoSAW/", "")
pagina = pagina.replace(/\//g, "" )
pagina = pagina.replace(".html", "")
console.log(pagina)


let mostrarEstatica = false;
const slider = document.querySelector("#slide")
const slider2 = document.querySelector("#slide2")

let i = 0

function trocarSlide(){
    console.log(sliderImagens[pagina])
    if(i >= sliderImagens[pagina].length)
    {
        i = 0
    }
    if(mostrarEstatica) {
        slider.src = "./src/assets/imagens/estatica.gif"
        slider2.src = "./src/assets/imagens/estatica.gif"
        mostrarEstatica = false
        setTimeout(trocarSlide, 1000)
    }
    else{
        console.log(sliderImagens[pagina][i])
        slider.src = sliderImagens[pagina][i]
        slider2.src = sliderImagens[pagina][i]
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
