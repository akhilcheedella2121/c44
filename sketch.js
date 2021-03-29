//var
var gun 
var t1
var t2
var t3
var bg 
var bg2
var bg3
var gameState=0
var canvas
var database
var form
function preload(){
    bg = loadAnimation("bg2.png","bg1.png","bg3.png");
     
}

function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
  }
  
  
  function draw(){
    if(gameState === 1){
      clear();
      game.play();
    }
    if(gameState === 2){
      game.end();
    }
  }
