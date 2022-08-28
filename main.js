//audio
const audios = {
  teste: document.querySelector("#teste"),
  zoomMove: document.querySelector("#zoomMove"),
  optionSelect: document.querySelector("#optionSelect"),
  modernSelect: document.querySelector("#modernSelect"),
  notificationBleep: document.querySelector("#notificationBleep"),
  bleepConfirmation: document.querySelector("#bleepConfirmation"),
  bleep: document.querySelector("#bleep"),
  zoom: document.querySelector("#zoom"),
  zoomOut: document.querySelector("#zoomOut"),
  retroConfirmation: document.querySelector("#retroConfirmation"),
  loadSistem: document.querySelector("#loadSistem"),
  WelcomeHomeSr: document.querySelector("#WelcomeHomeSr") 
}
//gifs
const gifs = {
  gif1: document.getElementById('painelNormal'),
  gif2: document.getElementById('painelreverse'),
  gif3: document.getElementById('painelcontinuo'),
}
//classes
let elementos={
  ContentMenu : ['background', 'ContentMenu', ContentMenu],
}
//função para tocar os sons
function tocaEfeitoSonoro(efeitoSonoro){
  efeitoSonoro.play()
}
//função do slide
function testando (){
  let content = document.getElementById('content')
  let content2 = document.getElementById('content2')
  let img = document.querySelector("#background")
  content.classList.add('Teste');
  content2.classList.add('teste2')
  img.classList.add('backgroundFade')
}
//função para adicionar atributos
let introAcdcPlay = true; 

function togglePlay(audio){
  if(introAcdcPlay == true){
    audio.play()
    introAcdcPlay = false;
  }else{
    audio.pause()
    audio.currentTime = 0
    introAcdcPlay = true;
  }
};
//função para adicionar classes
//é só passar os itens do objeto 'elementos' como parâmetros
function adicionaClasse(className, elementId, id){
  //adiciona classe
  document.getElementById(elementId)
  id.classList.add(className)
}
//Remove classe
function removeClasse(className, elementId, id){
  //adiciona classe
  document.getElementById(elementId)
  id.classList.remove(className)
}
//função para adicionar classe como se fosse um botao
function modal(){
  let janela = document.getElementById('modal')
  janela.classList.toggle('scale-out-center')
}
//função para remover classe
function modal2(){
  let janela = document.getElementById('modal')
  janela.classList.remove('Close')
  janela.classList.remove('scale-out-center')
}
//função para abrir e fechar o menu
function Animation(ElementoId, addAnimation, toggleAnimation){
  let botao = document.getElementById(ElementoId)
  botao.classList.add(addAnimation)
  botao.classList.toggle(toggleAnimation)
}
//Animação do card neon
function Animation22(ElementoId, addAnimation, toggleAnimation){
  let botao = document.getElementById(ElementoId)
  botao.classList.add(addAnimation)
  botao.classList.toggle(toggleAnimation)
}

//função para trocar o conteudo do main content

let cargo = document.getElementById('Cargo')
let informacoes = document.getElementById('informacoes')
let tecnologias = document.getElementById('tecnologias')
let tecnologiasFotos = document.getElementById('tecnologiasFotos')
let AstronautaPerfil = document.getElementById('AstronautaPerfil')
let Astronauta = document.getElementById('Astronauta')
let projetos = document.getElementById('projetos')
let titulo = document.getElementById('titulo')

let botao1 = false
let botao2 = false
let botao3 = false

function changeValueOfBotao1(){
  botao1 = true
  changeMain()
  if(botao1 = true){
    cargo.classList.remove('fechar')
    cargo.innerHTML = "Desenvolvedor Front End"
    informacoes.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit qui ipsa natus quos. Quibusdam ipsa temporibus, repudiandae voluptate suscipit dolore ducimus expedita voluptatibus totam officiis tempore. Minima, odit minus?"
    tecnologias.innerHTML = "Habilidades:"
    AstronautaPerfil.classList.remove('fechar')
    Astronauta.classList.remove('botao2Action')
    titulo.classList.add('fechar')
    informacoes.classList.remove('fechar')
    tecnologias.classList.remove('fechar')
    tecnologiasFotos.classList.remove('fechar')
    projetos.classList.add('fechar')
  }
}
function changeValueOfBotao2(){
  botao2 = true
  changeMain()
  if(botao2 = true){
    titulo.classList.add('fechar')
    cargo.classList.remove('fechar')
    cargo.innerHTML = "Engenheiro Front-end"
    informacoes.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit qui ipsa natus quos. Quibusdam ipsa temporibus, repudiandae voluptate suscipit dolore ducimus expedita voluptatibus totam officiis tempore. Minima, odit minus?"
    tecnologias.innerHTML = "to aprendendoooo"
    AstronautaPerfil.classList.add('fechar')
    Astronauta.classList.add('botao2Action')
    projetos.classList.add('fechar')
    informacoes.classList.remove('fechar')
    tecnologias.classList.remove('fechar')
    tecnologiasFotos.classList.remove('fechar')
  }
}
function changeValueOfBotao3(){
  botao2 = true
  changeMain()
  if(botao2 = true){
    cargo.classList.add('fechar')
    cargo.classList.add('positionTittle')
    informacoes.classList.add('fechar')
    tecnologias.classList.add('fechar')
    tecnologiasFotos.classList.add('fechar')
    AstronautaPerfil.classList.add('fechar')
    Astronauta.classList.add('botao2Action')
    projetos.classList.remove('fechar')
    titulo.classList.remove('fechar')
  }
}
//Verifica se os itens são verdadeiros e caso sejam, setam para false, deixando apenas 1 como verdadeiro
//obs: usei o if e else porque o swich não é capaz de verificar mais de um item por vez.
function changeMain(componente1,componente2,componente3,componente4,componente5){
  if(botao1 == true){
    botao2 = false
    botao3 = false
    console.log('dentro do primeiro if', botao2, botao3)
  } else if (botao2 == true){
    botao1 = false
    botao3 = false
    console.log('dentro do segundo if', botao1, botao3)
  } else if (botao3 == true){
    botao1 = false
    botao2 = false
    console.log('dentro do terceiro if', botao1, botao2)
  }
}
//abrir links dos projetos
let projeto1 = 'https://samuelsenadev.netlify.app'

function abreProjeto(projeto){
  window.open(projeto,'_blank')
}



