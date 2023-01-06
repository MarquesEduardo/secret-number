function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Invalid value</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Invalid value: the number is between ${menorValor} and ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <div class="h-[calc(100vh-128px)] backdrop-blur-sm bg-white/30 border border-none rounded-3xl m-16 justify-center text-center text-3xl lg:text-5xl mt-10 flex flex-col items-center">
            <h2 class="m-5 text-6xl lg:text-9xl drop-shadow-xl">You won!</h2>
            <h3>The secret number was ${numeroSecreto}</h3>
            <button id="play-again" class="backdrop-blur-sm hover:bg-gray-100/25 text-white py-4 px-6 mt-10 border border-none rounded-3xl">Play Again</button>
            </div>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>The secret number is smaller</div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>The secret number is bigger</div>
        `
    }
 
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'play-again') {
        window.location.reload()
    }
})