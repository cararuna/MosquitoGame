var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight
  largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()

var life = 3
var contador = 0

function posicaoRandomica() {
  //remover o mosquito anterior (caso exista)

  if (document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove()
    life--
    atualizaVida()
  }

  var posicaoX = Math.floor(Math.random() * largura) - 90
  var posicaoY = Math.floor(Math.random() * altura) - 90

  posicaoX = posicaoX < 0 ? 0 : posicaoX
  posicaoY = posicaoY < 0 ? 0 : posicaoY

  //criar o elemento html
  var mosquito = document.createElement('img')
  mosquito.src = 'imagens/mosquito.png'
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
  mosquito.style.left = posicaoX + 'px'
  mosquito.style.top = posicaoY + 'px'
  mosquito.style.position = 'absolute'
  mosquito.id = 'mosquito'

  document.body.appendChild(mosquito)
}
addEventListener('click', function (e) {
  if (e.target.id === mosquito.id) {
    e.target.remove()
    contador++
    console.log(contador)
    document.getElementById('tempo').innerHTML = 'Moscas matadas:' + contador
  }
})

function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3)

  switch (classe) {
    case 0:
      return 'mosquito1'

    case 1:
      return 'mosquito2'

    case 2:
      return 'mosquito3'
  }
}

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2)

  switch (classe) {
    case 0:
      return 'ladoA'

    case 1:
      return 'ladoB'
  }
}

function atualizaVida() {
  if (life === 2) {
    var lifeBar = document.getElementById('vida3')
    lifeBar.src = 'imagens/coracao_vazio.png'
  } else if (life === 1) {
    var lifeBar = document.getElementById('vida2')
    lifeBar.src = 'imagens/coracao_vazio.png'
  } else if (life === 0) {
    var lifeBar = document.getElementById('vida1')
    lifeBar.src = 'imagens/coracao_vazio.png'

    setTimeout(function () {
      gameOver()
    }, 100)
  }
}

function gameOver() {
  alert('Game Over')
  window.location.reload()
}
