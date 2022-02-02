/* VARIAVEIS GLOBAIS */
const barras = document.querySelectorAll(".torre")
const container = document.getElementById("container-geral")
const resetButton = document.getElementById("reset-button")
const comemoracao = document.querySelector("h2")
let hold = null
let counter = document.getElementById("counter")
let count = 0
let dificuldade 

resetButton.addEventListener("click", resetGame)

container.addEventListener("click", function(event){
    let alvo = event.target.closest(".torre")
    
    if(hold == null && alvo.childElementCount == 0){
        
    }else if(hold == null){
        hold = alvo.lastElementChild
    }else if(alvo.childElementCount == 0 || hold.clientWidth < alvo.lastElementChild.clientWidth){
        alvo.appendChild(hold)
        hold = null
        count++
        counter.innerText = "Movimentos: " + count
    }
    if(hold.clientWidth >= barras[0].lastElementChild.clientWidth && hold.clientWidth >= barras[1].lastElementChild.clientWidth && hold.clientWidth >= barras[2].lastElementChild.clientWidth){
        console.log("travou")
        hold = null
    }
    checkWin(barras[2])
})

function checkWin(ultimaBarra){
    if(ultimaBarra.childElementCount == dificuldade){
        comemoracao.classList.remove("hidden")
    }
}

function resetGame(){
    const seletores = document.querySelectorAll("input")
    seletores.forEach(function (seletor){
        if(seletor.checked){
            dificuldade = seletor.value
        }
    })

    barras.forEach(barra => barra.innerHTML = "")

    if( dificuldade > 4 ){
        const vermelho = document.createElement("div")
        vermelho.classList.add("red","disco")
        barras[0].appendChild(vermelho)
    }
    if( dificuldade > 3){
        const verde = document.createElement("div")
        verde.classList.add("green", "disco")
        barras[0].appendChild(verde)
    }

    const roxo = document.createElement("div")
    roxo.classList.add("purple", "disco")

    const azul = document.createElement("div")
    azul.classList.add("blue", "disco")

    const amarelo = document.createElement("div")
    amarelo.classList.add("yellow", "disco")

    barras[0].appendChild(roxo)
    barras[0].appendChild(azul)
    barras[0].appendChild(amarelo)

    comemoracao.classList.add("hidden")
    
}

resetGame()


