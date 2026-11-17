//coordenadas utilizadas para os botões interativos;
var tela = 1;
var largura = 55;
var altura = 100;
var xMenu = 150;
var yMenu1 = 135;
var yMenu2 = 195;
var yMenu3 = 255;
var xVoltar = 10;
var yVoltar = 10;
var alturaVoltar = 80;
var larguraVoltar = 50;
var xCarro = 135;
var xv = [];
var yv = [];
var velxv = [];
var qt = 5;
var velyv = [];
var velaumento = 0.5;
let cont = 0;
let contS = 0;
let rate = 30;
function preload() {
  //carrega a imagem do carro
  carro = loadImage("New Piskel.png");
}
function setup() {
  createCanvas(400, 400);
  //tamanho do quadradado de fundo
  //código para inicializar
  //for utilizado para gerar os obstáculos
  for (i = 0; i < qt; i++) {
    xv[i] = random(10, 300);
    yv[i] = random(100, 110);
    velyv[i] = 1;
    console.log(velyv[i]);
  }
  frameRate(rate);
}
function draw() {
  textStyle(NORMAL);
  //Tela do menu do jogo
  if (tela == 1) {
    //background: cor, stroke: borda das letras, fill: cor da letra
    background(30, 144, 255);
    stroke(200);
    fill(20);
    textSize(25);
    text("CAR DRIVER", 200, 80);
    //Menu com 3 opções (iniciar, instruções, créditos)
    //Início do jogo
    textAlign(CENTER);
    textSize(20);
    if (
      mouseX > xMenu &&
      mouseX < xMenu + altura &&
      mouseY > yMenu1 &&
      mouseY < yMenu1 + largura
    ) {
      stroke(20);
      fill(200);
      rect(xMenu, yMenu1, altura, largura, 5);
      if (mouseIsPressed) {
        tela = 2;
        xCarro = 135;
      }
    }
    fill(20);
    noStroke();
    text("Jogar", 200, 170);

    //Instruções do jogo
    if (
      mouseX > xMenu &&
      mouseX < xMenu + altura &&
      mouseY > yMenu2 &&
      mouseY < yMenu2 + largura
    ) {
      stroke(20);
      fill(200);
      rect(xMenu, yMenu2, altura, largura, 5);
      if (mouseIsPressed) {
        tela = 3;
      }
    }
    fill(20);
    noStroke();
    text("Instruções", 200, 230);
    //Créditos no jogo
    if (
      mouseX > xMenu &&
      mouseX < xMenu + altura &&
      mouseY > yMenu3 &&
      mouseY < yMenu3 + largura
    ) {
      stroke(20);
      fill(200);
      rect(xMenu, yMenu3, altura, largura, 5);
      if (mouseIsPressed) {
        tela = 4;
      }
    }
    fill(20);
    noStroke();
    text("Créditos", 200, 290);
  }
  if (tela == 2) {
    //Tela do jogo
    background(30, 144, 255);
    cont++;
    textSize(20);
    contS = parseInt(cont / rate);
    //contador de tempo
    text(contS, 380, 40);
    stroke(200);
    fill(20);
    textSize(25);
    text("CAR DRIVER", 200, 80);
    textSize(15);
    if (
      mouseX > xVoltar &&
      mouseX < xVoltar + alturaVoltar &&
      mouseY > yVoltar &&
      mouseY < yVoltar + larguraVoltar
    ) {
      stroke(20);
      fill(200);
      rect(xVoltar, yVoltar, alturaVoltar, larguraVoltar, 5);
      if (mouseIsPressed) {
        tela = 1;
        console.log("voltar");
        for (i = 0; i < qt; i++) {
          velyv[i] = 1;
          xv[i] = random(10, 300);
          yv[i] = random(100, 110);
        }
        cont = 0;
        contS = 0;
      }
    }
    if (contS > 30) {
      //quando ultrapassar de 30 segundos a tela é mudada
      tela = 6;
    }
    fill(169, 169, 175);
    rect(0, 100, 400, 280);
    fill(255, 255, 0);
    rect(190, 100, 10, 280);
    image(carro, xCarro, 285, 100, 100);
    //coordenadas e dimensões do carro
    fill(20);
    noStroke();
    text("Voltar", 50, 40);
    for (i = 0; i < qt; i++) {
      fill(0);
      circle(xv[i], yv[i], 10);
      //criação dos círculos (obstáculos)
      // vetor utilizado para a geração dos obstáculos
      yv[i] = yv[i] + velyv[i];
      if (yv[i] > 370) {
        xv[i] = random(10, 399);
        yv[i] = 100;
        velyv[i] = velyv[i] + velaumento;
      }
    }
  }
  if (tela == 3) {
    //Tela das instruções
    background(30, 144, 255);
    stroke(200);
    fill(20);
    textSize(25);
    text("Instruções", 200, 80);
    textAlign(CENTER);
    stroke(120);
    textSize(15);
    text("O jogo consiste em uma aventura dinâmica", 200, 150);
    text("em que o jogador controla um carro e busca", 200, 170);
    text("desviar dos obstáculos usando as setas direita e", 200, 190);
    text("esquerdo do teclado.", 200, 210);
    if (
      mouseX > xVoltar &&
      mouseX < xVoltar + alturaVoltar &&
      mouseY > yVoltar &&
      mouseY < yVoltar + larguraVoltar
    ) {
      stroke(20);
      fill(200);
      rect(xVoltar, yVoltar, alturaVoltar, larguraVoltar, 5);
      if (mouseIsPressed) {
        tela = 1;
      }
    }
    fill(20);
    noStroke();
    text("Voltar", 50, 40);
  }
  if (tela == 4) {
    //Tela dos créditos
    background(30, 144, 255);
    stroke(200);
    fill(20);
    textSize(25);
    text("Créditos", 200, 80);
    textAlign(CENTER);
    stroke(120);
    textSize(18);
    text("Criador: João Victor de Souza Pereira", 200, 150);
    if (
      mouseX > xVoltar &&
      mouseX < xVoltar + alturaVoltar &&
      mouseY > yVoltar &&
      mouseY < yVoltar + larguraVoltar
    ) {
      stroke(20);
      fill(200);
      rect(xVoltar, yVoltar, alturaVoltar, larguraVoltar, 5);
      if (mouseIsPressed) {
        tela = 1;
      }
    }
    fill(20);
    noStroke();
    text("Voltar", 50, 40);
  }
  if (tela == 5) {
    //tela game over
    background(30, 144, 255);
    stroke(120);
    textSize(25);
    text("Game Over", 200, 200);
    textSize(18);
    if (
      mouseX > xVoltar &&
      mouseX < xVoltar + alturaVoltar &&
      mouseY > yVoltar &&
      mouseY < yVoltar + larguraVoltar
    ) {
      stroke(20);
      fill(200);
      rect(xVoltar, yVoltar, alturaVoltar, larguraVoltar, 5);
      if (mouseIsPressed) {
        tela = 1;
      }
    }
    fill(20);
    noStroke();
    text("Voltar", 50, 40);
  }
  if (tela == 6) {
    //tela jogo concluído
    background(30, 144, 255);
    stroke(120);
    fill(20);
    textSize(25);
    text("Você Venceu", 200, 200);
    textSize(18);
    if (
      mouseX > xVoltar &&
      mouseX < xVoltar + alturaVoltar &&
      mouseY > yVoltar &&
      mouseY < yVoltar + larguraVoltar
    ) {
      stroke(20);
      fill(200);
      rect(xVoltar, yVoltar, alturaVoltar, larguraVoltar, 5);

      if (mouseIsPressed) {
        tela = 1;
      }
    }
    fill(20);
    noStroke();
    text("Voltar", 50, 40);
  }
}
function keyPressed() {
  //função associada à movimentação do carro, no caso, apenas pelo eixo X;
  if (tela == 2) {
    if (keyCode == 39)
      if (xCarro <= 290) {
        xCarro += 30;
      }
  }
  if (keyCode == 37) {
    if (xCarro >= 10) {
      xCarro -= 30;
    }
  }
}
