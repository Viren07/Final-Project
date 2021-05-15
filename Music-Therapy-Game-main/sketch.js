var keyA, keyB, keyC, keyD, keyE, keyF, keyC1, keyB1, keyA1, keyD1, keyE1, keyF1, keyG1 

function preload () {
 A1 = loadSound ("mp3 Notes/a3.mp3")
 B1 = loadSound ("mp3 Notes/b3.mp3")
 C1 = loadSound ("mp3 Notes/c3.mp3")
 D1 = loadSound ("mp3 Notes/d3.mp3")
 E1 = loadSound ("mp3 Notes/e3.mp3")
 F1 = loadSound ("mp3 Notes/f3.mp3")
 G1 = loadSound ("mp3 Notes/g3.mp3") 

}



function setup(){
createCanvas(720,600);


keyC = createSprite(20,500,50,200); 
keyD = createSprite(72,500,50,200); 
keyE = createSprite(124,500,50,200); 
keyF = createSprite(176,500,50,200); 
keyG = createSprite(228,500,50,200); 
keyA = createSprite(280,500,50,200); 
keyB = createSprite(332,500,50,200); 
keycS = createSprite(45,450,25,100); 
keydS = createSprite(97,450,25,100); 
keyfS = createSprite(202,450,25,100); 
keygS = createSprite(254,450,25,100); 
keyaS = createSprite(306,450,25,100);
keyC1 = createSprite(384,500,50,200); 
keyD1 = createSprite(436,500,50,200); 
keyE1 = createSprite(488,500,50,200); 
keyF1 = createSprite(540,500,50,200); 
keyG1 = createSprite(592,500,50,200); 
keyA1 = createSprite(644,500,50,200); 
keyB1 = createSprite(696,500,50,200); 
keycS1 = createSprite(409,450,25,100); 
keydS1 = createSprite(461,450,25,100); 
keyfS1 = createSprite(565,450,25,100); 
keygS1 = createSprite(617,450,25,100); 
keyaS1 = createSprite(669,450,25,100);


keyA.shapeColor="white";
keyB.shapeColor="white";
keyC.shapeColor="white";
keyD.shapeColor="white";
keyE.shapeColor="white";
keyF.shapeColor="white";
keyG.shapeColor="white";
keycS.shapeColor="black";
keydS.shapeColor="black";
keyfS.shapeColor="black";
keygS.shapeColor="black";
keyaS.shapeColor="black";

keyA1.shapeColor="white";
keyB1.shapeColor="white";
keyC1.shapeColor="white";
keyD1.shapeColor="white";
keyE1.shapeColor="white";
keyF1.shapeColor="white";
keyG1.shapeColor="white";
keycS1.shapeColor="black";
keydS1.shapeColor="black";
keyfS1.shapeColor="black";
keygS1.shapeColor="black";
keyaS1.shapeColor="black";

h = createSprite(225,10,10,10)
h.shapeColor = "green";
h.velocityY = 4;
h.lifetime = 98

h1 = createSprite(225,-50,10,10)
h1.shapeColor = "green";
h1.velocityY = 4;
h1.lifetime = 114

h2 = createSprite(285,-90,10,10)
h2.shapeColor = "green";
h2.velocityY = 4;
h2.lifetime = 125
}



function draw() {

background("blue");

    
drawSprites();

textSize(20);
  fill("red");
  text("C",20,550);
  
    textSize(20);
  fill("red");
  text("D",70,550);
  
    textSize(20);
  fill("red");
  text("E",125,550); 
  
  textSize(20);
  fill("red");
  text("F",170,550);
  
  textSize(20);
  fill("red");
  text("G",225,550);
  
  textSize(20);
  fill("red");
  text("A",270,550);
  
  textSize(20);
  fill("red");
  text("B",330,550);
  
    textSize(20);
  fill("red");
  text("C♯",35,460);
  
    textSize(20);
  fill("red");
  text("D♯",85,460);
  
    textSize(20);
  fill("red");
  text("F♯",190,460);
  
    textSize(20);
  fill("red");
  text("A♯",245,460);
  
    textSize(20);
  fill("red");
  text("B♯",290,460);
 
if(h.isTouching(keyG)){
  keyG.shapeColor = "red"
  G1.play() 
  h.velocityY = 0 
 }
 if(h.lifetime===0){
   keyG.shapeColor = "white"
 }

if(h1.isTouching(keyG)){
  keyG.shapeColor = "red"
  G1.play() 
  h1.velocityY = 0 
}
if(h1.lifetime===0){
  keyG.shapeColor = "white"
}

if(h2.isTouching(keyA)){
  keyA.shapeColor = "red"
  A1.play() 
} 
if(h2.lifetime===0){
  keyA.shapeColor = "white"
}
}