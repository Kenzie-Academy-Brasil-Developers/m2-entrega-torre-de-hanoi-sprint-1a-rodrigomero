/* VARIAVEIS GLOBAIS */
const barras = document.querySelectorAll(".torre")
const container = document.getElementById("container-geral")
let hold = null

//corrigir quando clicar numa barra vazia, nao fazer nada
for(let i = 0;i<barras.length;i++){
    barras[i].addEventListener("click", function(event){
        let alvo = event.currentTarget
        console.log(alvo)
        if(hold == null){
            hold = alvo.lastElementChild
        }else{
            alvo.appendChild(hold)
            hold = null
        }    
    })
}

function ResetGame(){
    barraEsq.innerHTML = ""
    barraCentro.innerHTML = ""
    barraDir.innerHTML = ""

    const vermelho = document.createElement("div")
    vermelho.classList.add("red","disco")

    const verde = document.createElement("div")
    verde.classList.add("green", "disco")

    const roxo = document.createElement("div")
    roxo.classList.add("purple", "disco")

    const azul = document.createElement("div")
    azul.classList.add("blue", "disco")

    barraEsq.appendChild(vermelho)
    barraEsq.appendChild(verde)
    barraEsq.appendChild(roxo)
    barraEsq.appendChild(azul)

}