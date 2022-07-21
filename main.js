var altura = 0
var largura = 0 
var vidas = 1
var tempo = 10

var criarMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
	var criarMosquitoTempo = 1500
} else if(nivel === 'dificil') {
	var criarMosquitoTempo = 1000
} else if(nivel === 'expert') {
	var criarMosquitoTempo = 750
}


function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
	
	tempo -= 1
	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criarMosquito)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000)

function posicaoRandomica() {

if(document.getElementById('mosquito')) {
	document.getElementById('mosquito').remove()

	if(vidas > 3) {
		window.location.href = 'gameover.html'

	} else {

	document.getElementById('v' + vidas).src="Imagens/coracao_vazio.png"

	vidas++

	}
}

var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

var mosquito = document.createElement('img')
mosquito.src = 'Imagens/mosca.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function() {
	this.remove()
}

document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {
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

	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'

	}
}

var criarMosquito = setInterval(function() {
	posicaoRandomica()
}, criarMosquitoTempo)