let ballx = 300;
let bally = 300;
let ballSize = 60;
let ballColor = 20;
let score = 0;
let timer = 60;
let song;


function setup() {
  createCanvas(1280, 720);
  textAlign(CENTER);
  textSize(20);
  font = loadFont('assets/font.TTF');
  bg = loadImage('assets/victory.jpg');
  bg2 = loadImage('assets/standardbackground.jpg');
  knight1 = loadImage('assets/Knight1.png');
  song = loadSound('assets/Monkeys-Spinning-Monkeys.mp3');

}

function draw() {
  background(220);
  //TIMER
  textFont(font);
  textSize(20);
  text("Timer", 35, 75);
  // Timer value
  textSize(20);
  text(timer, 35, 100);

  //TIMER calculation
  if (frameCount % 60 == 0 && timer > 0)
	timer --;
  if (timer == 0){
    background(bg);
    textFont(font);
    text("You lose!", width/2, height-20);
    text("Reload game to try again!");

    
	// end screen
  }


  levelOne();
  textFont(font);
  text(("Score: " + score),width/2,40)
}


function levelOne(){
  textFont(font);
  text("Level 1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width-100);
    bally = random(height-100);
    score = score + 1;
  }
  if(score < 10){
    background(bg2);
    
  }
  
  if(score > 9){
    background(bg);
    textFont(font);
    text("Victory Accomplished!", width/2, height-20);
    text("Ten in a Row!");
  if(score > 10){
    background(bg2);

  }
  if(score > 19){
    background(bg);
    textFont(font);
    text("Victory Accomplished!", width/2, height-20);
    text("Twenty in a Row!");
  }
  if(score > 20){
    background(bg2);
  
  }
  if(score > 29){
    background(bg);
    textFont(font);
    text("Victory Accomplished!", width/2, height-20);
    text("Twenty in a Row!");
  }
  if(score > 30){
    window.open('https://editor.p5js.org/EzraLee/full/GQ4TIZms7');
  }
  if(score > 31){
    window.close();
  }

  

    
  }
  let c1 = color("rgb(47,240,47)");
  fill(c1);
  noStroke();
  line(ballx, bally, mouseX, mouseY);
  //let c = color(0, 254, 0);
  //fill(c);
  noStroke();
  ellipse(ballx,bally, ballSize, ballSize);
  image(knight1,ballx-70,bally-75,110,110);
}