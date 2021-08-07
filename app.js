const main = document.querySelector('main')

const expressaoHumana = [
    {img:'./img/andar de bicicleta.jpg', texto: 'andar de bicicleta'},
    {img:'./img/brincar-de-carrinho.jpeg', texto: 'bricar de carrinho'},
    {img:'./img/comida.jpg', texto: 'estou com fome'},
    {img:'./img/oração.jpg', texto: 'vamos orar'},
    {img:'./img/dormir.jpg', texto: 'hora dormir'},
    {img:'./img/banho.jpg', texto: 'toma banho'},
    {img:'./img/escovar dente.jpg', texto: 'escovar os dentes'},
    {img:'./img/estudar.jpg', texto: 'estudar'},
]

const criarExpressao = ({ img, texto }) => {
    const div = document.createElement('div')

    div.classList.add('expressao-box')
    div.innerHTML = `
        <img src="${img}" alt="${texto}">
        <p class="info">${texto}</p>
    `

    main.appendChild(div)
}


expressaoHumana.forEach(criarExpressao)