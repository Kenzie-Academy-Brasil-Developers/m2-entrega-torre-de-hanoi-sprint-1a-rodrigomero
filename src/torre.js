const container = document.getElementById("container-geral")
for(let i = 0;i<3;i++){
    const barra = document.createElement("div")
    barra.classList.add("torre")
    container.appendChild(barra)
}
const barras = document.querySelectorAll(".torre")
barras[0].id = "start"
barras[1].id = "offset"
barras[2].id = "end"

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
        if(barras[0].hasChildNodes() && barras[1].hasChildNodes() && barras[2].hasChildNodes()){

            if(hold.clientWidth >= barras[0].lastElementChild.clientWidth && hold.clientWidth >= barras[1].lastElementChild.clientWidth && hold.clientWidth >= barras[2].lastElementChild.clientWidth){
                
                hold = null
            }
        }

    }else if(alvo.childElementCount == 0 || hold.clientWidth < alvo.lastElementChild.clientWidth){
        alvo.appendChild(hold)
        hold = null
        count++
        counter.innerText = "Movimentos: " + count
        checkWin(barras[2])
    }
    
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

    if( dificuldade > 3 ){
        const vermelho = document.createElement("div")
        vermelho.classList.add("red","disco")
        barras[0].appendChild(vermelho)
    }
    const verde = document.createElement("div")
    verde.classList.add("green", "disco")
    barras[0].appendChild(verde)
    
    const roxo = document.createElement("div")
    roxo.classList.add("purple", "disco")
    
    const azul = document.createElement("div")
    azul.classList.add("blue", "disco")
    
    
    barras[0].appendChild(roxo)
    barras[0].appendChild(azul)
    
    if( dificuldade > 4){
        const amarelo = document.createElement("div")
        amarelo.classList.add("yellow", "disco")
        barras[0].appendChild(amarelo)
    }
    
    comemoracao.classList.add("hidden")
    count = 0
    counter.innerText = "Movimentos: "
    hold = null
}

resetGame()


