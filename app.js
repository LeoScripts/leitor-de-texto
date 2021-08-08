//selecionado o main e adicionando na varialvel main
const main = document.querySelector('main')

//adicionando a classe do botao a essa variavel
const botaoTexto = document.querySelector('.botao-texto')

//adicionando a div em que sera feito o clic pra o aparecimeto da textearea
const divCaixaTexto = document.querySelector('.caixa-texto')

//adicionando classe que recebe a função sair
const saiDivCaixaTexto = document.querySelector('.sair')

//selecionando o select pra colocarmos os options que criamos aqui
const idiomas = document.querySelector('select')

//array com imagens e textos que seram usados 
const expressaoHumana = [
    {img:'./img/andar de bicicleta.jpg', texto: 'andar de bicicleta'},
    {img:'./img/oração.jpg', texto: 'vamos orar'},
    {img:'./img/dormir.jpg', texto: 'hora dormir'},
    {img:'./img/banho.jpg', texto: 'toma banho'},
    {img:'./img/escovar dente.jpg', texto: 'escovar os dentes'},
    {img:'./img/estudar.jpg', texto: 'estudar'}
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

//faz a criação dos itens na div
expressaoHumana.forEach(criarExpressao);


let voices = []

//adicionando pacote colecao de vozes
speechSynthesis.addEventListener('voiceschanged', () => {
    voices = speechSynthesis.getVoices()

    voices.forEach(({ name, lang }) => {
        const option = document.createElement('option')

        option.value = name
        option.textContent = `${lang} | ${name}`
        idiomas.appendChild(option)   
    })
})



//pra quando o botao for clicado apareça o textarea
botaoTexto.addEventListener('click',()=>{
    //adicionando a classe show  que ao clicar no botao faz a textarea aprarecer
    divCaixaTexto.classList.add('show')

})

saiDivCaixaTexto.addEventListener('click', ()=>{
    //desativando a caixa texarea atravez da classe show
    divCaixaTexto.classList.remove('show')
})