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

//selecinando o botao com o id = ler
const ler = document.querySelector('#ler')

//selecionando textarea pra receber o texto digitado nele
const textArea = document.querySelector('textarea')

//selecionando o footer
const footer = document.querySelector('footer')




//array com imagens e textos que seram usados 
const expressaoHumana = [
    {img:'./img/andar de bicicleta.jpg', text: 'andar de bicicleta'},
    {img:'./img/oração.jpg', text: 'vamos orar'},
    {img:'./img/dormir.jpg', text: 'hora de dormir'},
    {img:'./img/banho.jpg', text: 'tomar banho'},
    {img:'./img/escovar dente.jpg', text: 'escovar os dentes'},
    {img:'./img/estudar.jpg', text: 'estudar'}
]


const textoDigitado = new SpeechSynthesisUtterance()
const inserindoTexto = text => {
    textoDigitado.text = text
}

const somDoTexto = () => {
    speechSynthesis.speak(textoDigitado)
}

const setVoice = event => {
    const selecaoDeVoz = voices.find(voice => voice.name === event.target.value)
    textoDigitado.voice = selecaoDeVoz
}

const criarExpressao = ({ img, text }) => {
    //criando a div la no html
    const div = document.createElement('div')
    //adicionando a classe = expressao-box
    div.classList.add('expressao-box')
    //criando as tags img e p que estarao na nossa div
    div.innerHTML = `
        <img src="${img}" alt="${text}">
        <p class="info">${text}</p>
    `

    div.addEventListener('click', () => {
        inserindoTexto(text)
        somDoTexto()

        div.classList.add('active')
        setTimeout(()=>{
            div.classList.remove('active')
        },1000)
    })

    // adicionando a div aqui criada como ultimo filho da main do html
    // que que esta vazio
    main.appendChild(div)
}

//faz a criação dos itens na div
expressaoHumana.forEach(criarExpressao);


let voices = []

//adicionando pacote colecao idioma de vozes
speechSynthesis.addEventListener('voiceschanged', () => {
    voices = speechSynthesis.getVoices()
    console.log(voices)



    //criando itens no select
    voices.forEach(({ name, lang }) => {
        //criando o elemento option
        const option = document.createElement('option')

        option.value = name;




        option.textContent = `${lang} | ${name}`

        //inserindo as options na select
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

idiomas.addEventListener('change', setVoice)

ler.addEventListener('click', ()=>{
    inserindoTexto(textArea.value)
    somDoTexto()
})

