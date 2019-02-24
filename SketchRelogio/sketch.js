var cx, cy;
var diaRelogio;
var raio

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  cx = width / 2;
  cy = height / 2;
  diaRelogio = 300;
  raio = diaRelogio/2;
}

function draw() {
  //ellipses maiores
  background(255);
  
	
	fill(240);
  circle(cx, cy, 170);
	
	fill(300);
	circle(cx, cy, 150);

 	
  //Ponteiros horas-vermelho
  fill(255,0,0)
  stroke(255,0,0)
  rect(cx, cy-4, raio-70, 4);//Base do ponteiro-vermelho
  triangle(diaRelogio-20, cy-9, diaRelogio-20, cy+7, diaRelogio-5, cy-1);
  
  //Ponteiro minutos-preto
  stroke(0);
  fill(0);
  rect(cx-3, raio-70, 4, raio-40);//Base do ponteiro-preto
  triangle(cx, 65, cx-9, 80, cx+9, 80);//Triângulo do ponteiro-preto
  
  //Circulo central-preto
  ellipse(cx, cy, 30, 30);
	fill(250);
	circle(cx+7, cy-8, 2);
	fill(80);
	circle(cx-3, cy-2, 10);
  
	fill(0);
  numeros = 3 // Incrementar horas - começa no ângulo 0
  for (var angulo = 0; angulo <= 330; angulo += 30) {
    //Traços que marca as horas
    var x = cos(radians(angulo)) * raio/1.2;
    var y = sin(radians(angulo)) * raio/1.2;
    
    var xi = cos(radians(angulo)) * raio;
    var yi = sin(radians(angulo)) * raio;

    line(x + cx, y + cy, xi + cx, yi + cy);// traços das horas
    
    //Números das horas
    var xa = cos(radians(angulo)) * raio/1.35;
    var ya = sin(radians(angulo)) * raio/1.35;
    
    if(angulo == 300){ //Para quando chegar no 12 voltar para 1
     	numeros = 1 
    }
    textSize(30);
    color(0);
    text(numeros, xa+cx, ya+cy);
    numeros +=1;
  }
  noFill();
}