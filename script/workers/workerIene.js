async function conectaAPI(){
    const conecta = await fetch('https://economia.awesomeapi.com.br/last/INE-BRL')
    const conectaTraduzido = await conecta.json()
    postMessage(conectaTraduzido.INEBRL)
}

addEventListener('message', () => {
    conectaAPI()
    setInterval(() => conectaAPI(), 5000)
})