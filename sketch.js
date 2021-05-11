
var bg, bgimg1 , bgimg2;
var player, playerimg;
var pillarstart, pillarstartimg;
var pillargroup;
var pillar, pillarimg , pillarimg2 ,pillarimg3, pillarimg4;
var island , island2, island3, island4, island5, island6,island7, island8, island9, island10;
var gameState = "start" ;

var pillarGroup ;





function preload(){
//
bgimg1 = loadImage("bg1.jpg");
bgimg2 = loadImage("bg2.jpg");

playerimg = loadImage("player.png");

//pillarstartimg = loadImage("s.png");
pillarimg = loadImage("p1.png"); 
pillarimg2 = loadImage("p2.png");
pillarimg3 = loadImage("p3.png");
pillarimg4 = loadImage("p4.png");

island = loadImage("f1.png");
island2 = loadImage("f2.png");
island3 = loadImage("f3.png");
island4 = loadImage("f4.png");
island5 = loadImage("f5.png");
island6 = loadImage("f6.png");
island7 = loadImage("f7.png");
island8 = loadImage("f8.png");
island9 = loadImage("f9.png");
island10 = loadImage("f10.png");

}


function setup(){
  createCanvas(1200,600);
  bg = createSprite(400,200); 
  bg.addImage(bgimg1);
  bg.scale = 1.5 ;

  bg.x = bg.width /2;
 bg.velocityX = -6 ;
 //-(6 + 3*score/100);

 pillarGroup =  new Group();
}



      function draw(){
   background(0)

    if (bg.x < 0){
   bg.x = bg.width/2;
    }

      
    setInterval(changebg2(),60000);
    change();
   console.log(frameCount);
      drawSprites();

      }
     

 // for channing bg 
  function change(){
    
    var r = Math.round(random(1,2))
    switch(r){
      case 1: changebg1();
      break;
      case 2: changebg2();
       break;
       default: break;
    }


  }


//biom 1
function changebg1(){
 bg.addImage(bgimg1);

  
  if(frameCount % 90 === 0) {
    var pillar  = createSprite(1300,random(475,575),10,40);
    //pillar .debug = true;
    pillar.velocityX = -6 ;
    //-(6 + 3*score/100);
    
    //generate random pillar s
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: pillar .addImage(pillarimg);
              break;
      case 2: pillar .addImage(island3);
              break;
      case 3: pillar .addImage(island4);
              break;
              
      default: break;
    }

    //assign scale and lifetime to the pillar            
    pillar .scale = 0.5;
    pillar .lifetime = 300;
    //add each pillar  to the group
   pillarGroup.add(pillar );

  }

}

// biom2 
function changebg2(){
  bg.addImage(bgimg2);
 
   
   if(frameCount % 90 === 0) {
     var pillar  = createSprite(1300,random(475,575),10,40);
     //pillar .debug = true;
     pillar.velocityX = -6 ;
     //-(6 + 3*score/100);
     
     //generate random pillar s
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: pillar .addImage(pillarimg2);
               break;
       case 2: pillar .addImage(island5);
               break;
       case 3: pillar .addImage(island6);
               break;
               
       default: break;
     }
 
     //assign scale and lifetime to the pillar            
     pillar .scale = 0.5;
     pillar .lifetime = 300;
     //add each pillar  to the group
    pillarGroup.add(pillar );
 
   }
 
 }