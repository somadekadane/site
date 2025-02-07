/**
 * Ano automático
 * @author Eder Silva
 */

// inserindo o ano na tag <span>
let ano = document.getElementById('copyrightYear')
// a linha abaixo obtem o ano atual do sistema
let anoAtual = new Date().getFullYear()
// linha abaixo atribui o ano a tag <span>
ano.innerHTML = anoAtual

// CARROSSEL

const main = document.querySelector('main')
const backgrounds = ['url(img/bolos1.png)','url(img/bolos2.jpg)','url(img/bolos3.jpg)']

let indice = 0

function slider(){
    indice ++
    if (indice >= backgrounds.length) {
        indice = 0
    }
    //troca da imagem de background no CSS
main.style.backgroundImage = backgrounds[indice]
main.style.transition = 'background-image 1s ease-in-out'
}

setInterval(slider, 4000)
