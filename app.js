//selecionado o main e adicionando na varialvel main
const main = document.querySelector('main')

//array com imagens e textos que seram usados 
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
    //criando a div la no html
    const div = document.createElement('div')
    //adicionando a classe = expressao-box
    div.classList.add('expressao-box')
    //criando as tags img e p que estarao na nossa div
    div.innerHTML = `
        <img src="${img}" alt="${texto}">
        <p class="info">${texto}</p>
    `
    // adicionando a div aqui criada como ultimo filho da main do html
    // que que esta vazio
    main.appendChild(div)
}


expressaoHumana.forEach(criarExpressao)