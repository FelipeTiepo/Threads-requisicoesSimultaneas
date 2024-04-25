async function conectaAPI() {
    const conecta = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
    const conectaTraduzido = await conecta.json();
    //POSTMESSAGE usado para uma thread converse com outra
    postMessage(conectaTraduzido.USDBRL);
}

addEventListener("message", () => {
    conectaAPI();
    setInterval(() => conectaAPI(), 5000);
})