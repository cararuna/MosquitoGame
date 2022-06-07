var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight
  largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()

function startGame() {
  retiraMosca()

  var test = setInterval(function () {
    posicaoRandomica()
    gameOverImg ? clearInterval(test) : null
  }, time)
}

function gameEasy() {
  time = 1500
  var item = document.getElementsByClassName('menu')[0]
  item.remove()

  startGame()
}

function gameMedium() {
  time = 1000
  var item = document.getElementsByClassName('menu')[0]
  item.remove()
  startGame()
}

function gameHard() {
  time = 800
  var item = document.getElementsByClassName('menu')[0]
  item.remove()

  startGame()
}

var life = 3
var contador = 0
function posicaoRandomica() {
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

function retiraMosca() {
  addEventListener('click', function (e) {
    if (e.target.id === mosquito.id) {
      e.target.remove()
      contador++
      document.getElementById('tempo').innerHTML = 'Moscas matadas:' + contador
      if (contador === 20) {
        setTimeout(function () {
          gameOver('Parabéns, você venceu !')
        }, 100)
      }
    }
  })
}

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

    gameOver('Game Over')
  }
}

function gameOver(msg) {
  if (msg === 'Game Over') {
    /* var mosquitoInvisible = document.getElementById('mosquito')
    console.log(mosquitoInvisible) */

    var gameOverImg = document.createElement('img')
    gameOverImg.src = 'imagens/game_over.png'
    gameOverImg.className = 'gameOverImg'
    gameOverImg.style.left = 100 + 'px'
    gameOverImg.style.top = 100 + 'px'
    gameOverImg.style.marginLeft = 40 + 'px'
    gameOverImg.style.position = 'absolute'
    gameOverImg.id = 'gameOverImg'
    gameOverImg.style.height = 80 + '%'
    gameOverImg.style.width = 80 + '%'
    gameOverImg.style.scale = '(-1,1)'

    document.body.appendChild(gameOverImg)
    /* setInterval(alert('Game Over'), 3000) */
  } else {
    var gameOverImg = document.createElement('img')
    gameOverImg.src = 'imagens/vitoria.png'
    gameOverImg.className = 'gameOverImg'
    gameOverImg.style.left = 100 + 'px'
    gameOverImg.style.top = 100 + 'px'
    gameOverImg.style.marginLeft = 40 + 'px'
    gameOverImg.style.position = 'absolute'
    gameOverImg.id = 'gameOverImg'
    gameOverImg.style.height = 80 + '%'
    gameOverImg.style.width = 80 + '%'
    /* gameOverImg.style.scale = '(-1,1)' */

    document.body.appendChild(gameOverImg)
    /* clearInterval(test) */
  }
}
