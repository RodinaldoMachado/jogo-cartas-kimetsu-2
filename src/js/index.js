const layoutDaCarta = {
    imagem: 'src/image/18.png',
}

const rengoku = {
    imagem: "src/image/1.png",
    nome: 'Rengoku',
    classe: 'Pilar das Chamas',
    ataque: 10,
    defesa: 9
}

const tomioka = {
    imagem: 'src/image/2.png',
    nome: 'Tomioka',
    classe: 'Pilar da Agua',
    ataque: 8,
    defesa: 8
}

const obanai = {
    imagem: 'src/image/3.png',
    nome: 'Obanai',
    classe: 'Pilar das serpentes',
    ataque: 9,
    defesa: 5
}

const shinobu = {
    imagem: 'src/image/6.png',
    nome: 'shinobu',
    classe: 'Pilar dos Insetos',
    ataque: 6,
    defesa: 5
}

const sanemi = {
    imagem: 'src/image/7.png',
    nome: 'Sanemi',
    classe: 'Pilar do Vento',
    ataque: 6,
    defesa: 5
}

const gyumei = {
    imagem: 'src/image/4.png',
    nome: 'Gyumei',
    classe: 'Pilar da Rocha',
    ataque: 9,
    defesa: 10
}

const tokito = {
    imagem: 'src/image/5.png',
    nome: 'Tokito',
    classe: 'Pilar da nevoa',
    ataque: 8,
    defesa: 6
}

const mitsuri = {
    imagem: 'src/image/9.png',
    nome: 'Mitsuri',
    classe: 'Pilar do Amor',
    ataque: 8,
    defesa: 8
}

const uzui = {
    imagem: 'src/image/8.png',
    nome: 'Tengen Uzui',
    classe: 'Pilar do Som',
    ataque: 8,
    defesa: 8
}

const akaza = {
    imagem: 'src/image/12.png',
    nome: 'Akaza',
    classe: 'Lua Superior #3',
    ataque: 7,
    defesa: 10
}

const dakiGyutaro = {
    imagem: 'src/image/17.png',
    nome: 'Daki e Gyutaro',
    classe: 'Lua Superior #6',
    ataque: 8,
    defesa: 7
}

const kokushibou = {
    imagem: 'src/image/10.png',
    nome: 'Kokushibou',
    classe: 'Lua Superior #1',
    ataque: 10,
    defesa: 9
}

const nakime = {
    imagem: 'src/image/14.png',
    nome: 'Nakime',
    classe: 'Lua Superior #4',
    ataque: 6,
    defesa: 10
}

const douma = {
    imagem: 'src/image/11.png',
    nome: 'Douma',
    classe: 'Lua Superior #2',
    ataque: 7,
    defesa: 9
}

const kaigaku = {
    imagem: 'src/image/16.png',
    nome: 'Kaigaku',
    classe: 'Lua Superior #6',
    ataque: 7,
    defesa: 6
}

const hantengu = {
    imagem: 'src/image/13.png',
    nome: 'Hantengu',
    classe: 'Lua Superior #4',
    ataque: 7,
    defesa: 6
}

const gyokku = {
    imagem: 'src/image/15.png',
    nome: 'Gyokku',
    classe: 'Lua Superior #5',
    ataque: 7,
    defesa: 7
}

const deck = [rengoku, tomioka, obanai, sanemi, shinobu, mitsuri, gyumei, tokito, uzui, dakiGyutaro, hantengu, kaigaku, kokushibou, gyokku, douma, akaza, nakime]
const cartaSelecionada = document.querySelector('.carta-4')
const baralhoPlayer = document.querySelector('#deck-player')
const imagemCartaJogada = document.querySelector('#carta-player')
const cartaPlayer1 = document.querySelector('#carta-1')
const cartaPlayer2 = document.querySelector('#carta-2')
const cartaPlayer3 = document.querySelector('#carta-3')
const reset = document.querySelector('#reset')

let resultadoRodada = document.querySelector('#resultado-da-rodada')
let playerUi = document.querySelector('#player-ui')
let compUi = document.querySelector('#comp-ui')


const cartaInimigo1 = document.querySelector('#carta-inimigo-1')
const cartaInimigo2 = document.querySelector('#carta-inimigo-2')
const cartaInimigo3 = document.querySelector('#carta-inimigo-3')
const cartaDoInimigoJogada = document.querySelector('#carta-comp')

const btnAtacar = document.querySelector('#btn-atacar')
const btnDefender = document.querySelector('#btn-defender')

const nomeDaCartaUi = document.querySelector('#nome-da-carta-ui')
const ataqueDaCartaUi = document.querySelector('#ataque-da-carta-ui')
const defesaDaCartaUi = document.querySelector('#defesa-da-carta-ui')
let baralho1 = [...deck]
let baralho2 = [...deck]
baralho1.sort(() => Math.random() - 0.5)
baralho2.sort(() => Math.random() - 0.5)
let cartaJogada = []
let cartaDoInimigo = []
let maoComp = [baralho2[0], baralho2[1], baralho2[2]]
let maoPlayer = [baralho1[0], baralho1[1], baralho1[2]]
baralho1.splice(0, 3)
baralho2.splice(0, 3)

function padraoInicial() {
    playerUi.innerHTML = baralho1.length + maoPlayer.length
    compUi.innerHTML = baralho2.length + maoComp.length

    cartaPlayer3.src = maoPlayer[0].imagem
    cartaPlayer2.src = maoPlayer[1].imagem
    cartaPlayer1.src = maoPlayer[2].imagem
    imagemCartaJogada.src = layoutDaCarta.imagem

    cartaInimigo3.src = layoutDaCarta.imagem
    cartaInimigo2.src = layoutDaCarta.imagem
    cartaInimigo1.src = layoutDaCarta.imagem
}

padraoInicial()
desabilitar('deck')


baralhoPlayer.addEventListener('click', function () {
    desabilitar('deck')
    abilitar('botoes')
    padaoCartas()
    resultadoRodada.innerHTML = ''
    if (baralho1[0]) {
        maoPlayer.push(baralho1[0])
        baralho1.splice(0, 1)
        posJogarCarta()
    } else {
        resultadoRodada.innerHTML = 'Você não tem mais cartas no baralho'
    }
    if (baralho2[0]) {
        maoComp.push(baralho2[0])
        baralho2.splice(0,1)
        posJogarCarta()
    }else{
        resultadoRodada.innerHTML = "Comp não tem mais cartas para compra"
    }
})

function posJogarCarta(){
    if (maoPlayer.length == 2) {
        cartaPlayer3.src = maoPlayer[0].imagem
        cartaPlayer2.src = maoPlayer[1].imagem
        cartaPlayer1.src=""
    }
    else if (maoPlayer.length === 1) {
        cartaPlayer3.src = maoPlayer[0].imagem
        cartaPlayer2.src=""
        cartaPlayer1.src=""
    }else if (maoPlayer.length === 3) {
        cartaPlayer3.src = maoPlayer[0].imagem
        cartaPlayer2.src = maoPlayer[1].imagem
        cartaPlayer1.src = maoPlayer[2].imagem
    }

    if(maoComp.length === 3){
        cartaInimigo3.src = layoutDaCarta.imagem
        cartaInimigo2.src = layoutDaCarta.imagem
        cartaInimigo1.src = layoutDaCarta.imagem
    }
    else if(maoComp.length === 2){
        cartaInimigo3.src = layoutDaCarta.imagem
        cartaInimigo2.src = layoutDaCarta.imagem
        cartaInimigo1.src=""
    }
    else if(maoComp.length === 1){
        cartaInimigo3.src = layoutDaCarta.imagem
        cartaInimigo2.src=""
        cartaInimigo1.src=""
    }
}


function jogarCarta(indice) {
    cartaJogada[0] = maoPlayer[indice]
    imagemCartaJogada.src = cartaJogada[0].imagem
    maoPlayer.splice(indice, 1)
    posJogarCarta()
}

function mensagem() {
    resultadoRodada.innerHTML = 'Voce ja jogou uma carta'
    setTimeout(() => {
        resultadoRodada.innerHTML = ''
    }, 800)
}

function infoDaCarta(obj, indice) {
    if (obj === 'mao') {
        nomeDaCartaUi.innerHTML =   maoPlayer[indice].nome
        ataqueDaCartaUi.innerHTML = maoPlayer[indice].ataque
        defesaDaCartaUi.innerHTML = maoPlayer[indice].defesa
    }
    else if (obj === 'cartaJogada') {
        nomeDaCartaUi.innerHTML = cartaJogada[0].nome
        ataqueDaCartaUi.innerHTML = cartaJogada[0].ataque
        defesaDaCartaUi.innerHTML = cartaJogada[0].defesa
    }
    else if (obj === 'cartaInimigo') {
        nomeDaCartaUi.innerHTML = cartaDoInimigoJogada[0].nome
        ataqueDaCartaUi.innerHTML = cartaDoInimigoJogada[0].ataque
        defesaDaCartaUi.innerHTML = cartaDoInimigoJogada[0].defesa
    }
}

function limparInfo() {
    nomeDaCartaUi.innerHTML = ''
    ataqueDaCartaUi.innerHTML = ''
    defesaDaCartaUi.innerHTML = ''
}

cartaPlayer1.addEventListener('click', () => {
    if (cartaJogada[0]) {
        mensagem()
    } else {
        cartaPlayer1.src = ""
        jogarCarta(2)
    }
})

cartaPlayer1.addEventListener('mouseover', () => {
    infoDaCarta('mao', 2)
})

cartaPlayer1.addEventListener('mouseout', () => {
    limparInfo()
})

cartaPlayer2.addEventListener('click', () => {
    if (cartaJogada[0]) {
        mensagem()
    } else {
        cartaPlayer2.src = ""
        jogarCarta(1)
    }
})

cartaPlayer2.addEventListener('mouseover', () => {
    infoDaCarta('mao', 1)
})

cartaPlayer2.addEventListener('mouseout', () => {
    limparInfo()
})

cartaPlayer3.addEventListener('click', () => {
    if (cartaJogada[0]) {
        mensagem()
    } else {
        cartaPlayer3.src = ""
        jogarCarta(0)
    }
})

cartaPlayer3.addEventListener('mouseover', () => {
    infoDaCarta('mao', 0)
})

cartaPlayer3.addEventListener('mouseout', () => {
    limparInfo()
})

imagemCartaJogada.addEventListener('mouseover', () => {
    if (cartaJogada[0]) {
        infoDaCarta('cartaJogada')
    }
})

imagemCartaJogada.addEventListener('mouseout', () => {
    limparInfo()
})

cartaDoInimigoJogada.addEventListener('mouseover', () => {
    if (cartaDoInimigo[0]) {
        infoDaCarta('cartaInimigo')
    }

})

cartaDoInimigoJogada.addEventListener('mouseout', () => {
    limparInfo()
})

reset.addEventListener('click',()=>{
    window.location.reload()
})

function jogadaComp() {
    let rand = Math.floor(Math.random() * maoComp.length)
    cartaDoInimigo[0] = maoComp[rand]
    cartaDoInimigoJogada.src = cartaDoInimigo[0].imagem
    if (rand === 0) {
        cartaInimigo3.src = ""
        maoComp.splice(0, 1)
    } else if (rand === 1) {
        cartaInimigo2.src = ""
        maoComp.splice(1, 1)
    } else if (rand === 2) {
        cartaInimigo1.src = ""
        maoComp.splice(2, 1)
    }

}

function atualizarPlacar() {
    playerUi.innerHTML = baralho1.length + maoPlayer.length
    compUi.innerHTML = baralho2.length + maoComp.length
}

function padaoCartas() {
    imagemCartaJogada.src = layoutDaCarta.imagem
    cartaDoInimigoJogada.src = layoutDaCarta.imagem
}

function venceu() {
    baralho1.push(cartaDoInimigo[0])
    baralho1.push(cartaJogada[0])
    cartaJogada.splice(0, 1)
    cartaDoInimigo.splice(0, 1)
    resultadoRodada.innerHTML = 'Você ganhou'
}

function empatou() {
    baralho2.push(cartaDoInimigo[0])
    baralho1.push(cartaJogada[0])
    cartaJogada.splice(0, 1)
    cartaDoInimigo.splice(0, 1)
    resultadoRodada.innerHTML = 'Empatou'
}

function perdeu() {
    baralho2.push(cartaDoInimigo[0])
    baralho2.push(cartaJogada[0])
    cartaJogada.splice(0, 1)
    cartaDoInimigo.splice(0, 1)
    resultadoRodada.innerHTML = 'Você perdeu'
}

function batalha(atributoPlayer, atributoComp) {
    setTimeout(() => {
        if (atributoPlayer > atributoComp) {
            venceu()
        }
        else if (atributoPlayer === atributoComp) {
            empatou()
        }
        else if (atributoPlayer < atributoComp) {
            perdeu()
        }
        atualizarPlacar()
        gameOver()
    }, 100);

}

function desabilitar(obj) {
    if (obj === 'botoes') {
        btnDefender.disabled = true
        btnAtacar.disabled = true
    }
    else if (obj === 'deck') {
        baralhoPlayer.style.display = 'none'
    }
}

function abilitar(obj) {
    if (obj === 'botoes') {
        btnDefender.disabled = false
        btnAtacar.disabled = false
    }
    else if (obj === 'deck') {
        baralhoPlayer.style.display = 'flex'
    }
}

btnAtacar.addEventListener('click', () => {
    desabilitar('botoes')
    jogadaComp()
    batalha(cartaJogada[0].ataque, cartaDoInimigo[0].ataque)
    abilitar('deck')
})

btnDefender.addEventListener('click', () => {
    desabilitar('botoes')
    jogadaComp()
    batalha(cartaJogada[0].defesa, cartaDoInimigo[0].defesa)
    abilitar('deck')
})

function gameOver() {
         if (baralho1.length === 0 && maoPlayer.length === 0 && cartaJogada.length === 0) {
            alert('Que pena você perdeu')
            return
        }
        else if (baralho2.length === 0 && maoComp.length === 0 && cartaDoInimigo.length === 0) {
            alert('Parabéns você ganhou')
            return
        }
}

