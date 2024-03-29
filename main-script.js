 var sketchProc = function(processingInstance) {
     with (processingInstance) {
        size(400, 400); 
        frameRate(30);


//Global game variables{
angleMode = "radians";

var Name = ""; //player's name
var Splash = []; // rock particles
var sparks = []; // spark particles
var rocks = []; // rock platforms
var fallingrocks = []; // falling rocks
var ai = []; // little ai characters


// 
var score = 0; /// current player score
var topScore = 0; ///current player top score

//which screen the program starts at (Logo, Menu, Game)
var screen = "Logo";

// all the camera vars
var cam = {x: 0, y: 0, speed: 0.7, shakeTime: 50, Reset: false};
// starting platform & player ready status
var Start = {x: -5, y: 220, w: 65, h: 150, ready: false};
//}


//// Custom font for the game title
var letters = {
R: function(x, y){
pushMatrix();
translate(x, y);//moves the letter to the x & y coordinates

strokeWeight(3); // outline thickness
stroke(69, 38, 0);// color of the outline

fill(99, 87, 66);//fills the darker shape

//draws the outline & dark part of the letter
beginShape();
vertex(-23, -38);
vertex(-23, 39);
vertex(-3, 39);
vertex(-4, 30);
vertex(-4, 25);
vertex(-2, 20);
vertex(-2, 5);
vertex(2, 5);
vertex(4, 24);
vertex(4, 38);
vertex(23, 38);
vertex(23, 8);
vertex(20, 1);
vertex(13, -1);
vertex(22, -6);
vertex(22, -30);
vertex(13, -38);
endShape(CLOSE);

noStroke(); // removes the outline for the lighter part
fill(140, 131, 116);//colors the lighter part of the letter

//draws the lightest part of the shape
beginShape();
vertex(-23, -38);
vertex(-23, 39);
vertex(-9, 39);
vertex(-10, 30);
vertex(-9, 25);
vertex(-8, 20);
vertex(-7, 5);
vertex(2, 5);
vertex(4, 24);
vertex(4, 38);
vertex(17, 38);
vertex(18, 17);
vertex(14, 6);
vertex(7, -1);
vertex(15, -6);
vertex(14, -30);
vertex(6, -38);
endShape(CLOSE);
popMatrix();




},
O: function(x, y){
pushMatrix();
translate(x, y);//moves the letter to the x & y coordinates

strokeWeight(3);// outline thickness
stroke(69, 38, 0);// color of the outline
fill(99, 87, 66);//fills the darker shape

//draws the outline & dark part of the letter
beginShape();
vertex(-9, -38);
vertex(-23, -27);
vertex(-23, 29);
vertex(-18, 37);
vertex(-7, 41);
vertex(5, 41);
vertex(17, 38);
vertex(24, 28);
vertex(24, -21);
vertex(15, -38);

endShape(CLOSE);

noStroke(); // removes the outline for the lighter part
fill(140, 131, 116);//colors the lighter part of the letter

//draws the lightest part of the shape
beginShape();
vertex(-9, -38);
vertex(-23, -27);
vertex(-23, 29);
vertex(-18, 37);
vertex(-7, 41);
vertex(5, 41);
vertex(8, 38);
vertex(17, 28);
vertex(17, -21);
vertex(10, -38);

endShape(CLOSE);

popMatrix();

},
C: function(x, y){
pushMatrix();
translate(x, y);//moves the letter to the x & y coordinates

strokeWeight(3);// outline thickness
stroke(69, 38, 0);// color of the outline
fill(99, 87, 66);//fills the darker shape

//draws the outline & dark part of the letter
beginShape();
vertex(-9, -38);
vertex(-23, -27);
vertex(-23, 29);
vertex(-12, 41);
vertex(15, 41);
vertex(23, 30);
vertex(23, 8);
vertex(4, 8);
vertex(4, 25);
vertex(-3, 23);
vertex(-3, -20);
vertex(3, -25);
vertex(3, -8);
vertex(24, -8);
vertex(24, -29);
vertex(12, -38);
endShape(CLOSE);

noStroke(); // removes the outline for the lighter part
fill(140, 131, 116);//colors the lighter part of the letter

//draws the lightest part of the shape
beginShape();
vertex(-9, -38);
vertex(-23, -27);
vertex(-23, 29);
vertex(-12, 41);
vertex(8, 41);
vertex(15, 30);
vertex(17, 8);
vertex(4, 8);
vertex(4, 25);
vertex(-9, 23);
vertex(-9, -20);
vertex(3, -25);
vertex(3, -8);
vertex(16, -8);
vertex(15, -29);
vertex(6, -38);
endShape(CLOSE);
popMatrix();


},
K: function(x, y){
pushMatrix();
translate(x, y);//moves the letter to the x & y coordinates

strokeWeight(3);// outline thickness
stroke(69, 38, 0);// color of the outline

fill(99, 87, 66);//fills the darker shape

//draws the outline & dark part of the letter
beginShape();
vertex(-23, -38);
vertex(-23, 40);
vertex(-4, 40);
vertex(-4, 10);
vertex(8, 40);
vertex(29, 40);
vertex(15, -2);
vertex(26, -38);
vertex(10, -38);
vertex(-4, -9);
vertex(-4, -38);
endShape(CLOSE);

noStroke(); // removes the outline for the lighter part
fill(140, 131, 116);//colors the lighter part of the letter

//draws the lightest part of the shape
beginShape();
vertex(-23, -38);
vertex(-23, 40);
vertex(-10, 40);
vertex(-6, 7);
vertex(8, 40);
vertex(22, 40);
vertex(9, -2);
vertex(20, -38);
vertex(10, -38);
vertex(-9, -2);
vertex(-10, -38);
endShape(CLOSE);
popMatrix();
},
H: function(x, y){
pushMatrix();
translate(x, y);//moves the letter to the x & y coordinates

strokeWeight(3);// outline thickness
stroke(69, 38, 0);// color of the outline

fill(99, 87, 66);//fills the darker shape

//draws the outline & dark part of the letter
beginShape();
vertex(-23, -38);
vertex(-23, 40);
vertex(-4, 40);
vertex(-4, 10);
vertex(4, 10);
vertex(4, 40);
vertex(24, 40);
vertex(24, -39);
vertex(4, -39);
vertex(4, -11);
vertex(-4, -11);
vertex(-4, -38);

endShape(CLOSE);

noStroke(); // removes the outline for the lighter part
fill(140, 131, 116);//colors the lighter part of the letter

//draws the lightest part of the shape
beginShape();
vertex(-23, -38);
vertex(-23, 40);
vertex(-9, 40);
vertex(-9, 10);
vertex(4, 10);
vertex(4, 40);
vertex(19, 40);
vertex(19, -39);
vertex(4, -39);
vertex(4, -11);
vertex(-9, -11);
vertex(-9, -38);

endShape(CLOSE);

popMatrix();



},
//O
P: function(x, y){
pushMatrix();
translate(x, y);//moves the letter to the x & y coordinates

strokeWeight(3);// outline thickness
stroke(69, 38, 0);// color of the outline

fill(99, 87, 66);//fills the darker shape

//draws the outline & dark part of the letter
beginShape();
vertex(-22, -38);
vertex(-22, 40);
vertex(0, 40);
vertex(0, 9);
vertex(14, 8);
vertex(24, -2);
vertex(24, -24);
vertex(15, -38);

endShape(CLOSE);

noStroke(); // removes the outline for the lighter part
fill(140, 131, 116);//colors the lighter part of the letter

//draws the lightest part of the shape
beginShape();
vertex(-22, -38);
vertex(-22, 40);
vertex(-5, 40);
vertex(-5, 9);
vertex(7, 8);
vertex(18, -2);
vertex(18, -24);
vertex(10, -38);

endShape(CLOSE);


popMatrix();


},

};

/// Custom font for the logo
var chars = {
    C : function(x, y, size) {
        pushMatrix();
        translate(x, y);
        
        scale(size/50);
        
      
beginShape();
vertex(19, -21);
bezierVertex(8, -25, -17, -22, -17, -2);
vertex(-20, -2.5);
bezierVertex(-16, 22, 18, 23, 19, 3);
bezierVertex(19, 7, -3, 16, -5, -2);
vertex(-8.5, -1.5);
bezierVertex(-11, -2, 0, -17, 18, -8);
bezierVertex(19, -14, 16, -8, 19, -21);
endShape(); 
popMatrix();
    },
    
    o : function(x, y, size) {
        pushMatrix();
           translate(x, y);
        scale(size/50);
        
        beginShape();
vertex(11, -14);
bezierVertex(-13, -17, -34, 6, -8, 13);
vertex(-10, 16);
bezierVertex(19, 21, 29, -5, 8, -10);
vertex(6, -6);
bezierVertex(15, 1, 4, 12, -6, 6);
vertex(-6, 8);
bezierVertex(-9, 8, -12, -6, 4, -3);
endShape(CLOSE);
popMatrix();
  },
  
   d : function(x, y, size) {
        pushMatrix();
           translate(x, y);
        scale(size/50);
        
        beginShape();
vertex(16, -1);
bezierVertex(17, -15, -2, -17, -19, -13);
bezierVertex(-15, -6, -17, -8, -16, -3);
vertex(-13, -4);
bezierVertex(-15, 20, -17, 12, -17, 16);
vertex(-9, 14);
bezierVertex(5, 20, 21, 10, 18, -1);
vertex(5, 1);
bezierVertex(6, 9, -1, 11, -3, 12);
vertex(-3, -6);
bezierVertex(8, -6, 7, 0, 7, 0);
endShape(CLOSE);
      
popMatrix();
    },
    
     e : function(x, y, size) {
        pushMatrix();
           translate(x, y);
        scale(size/50);
        
        beginShape();
vertex(16, -14);
bezierVertex(9, -14, 10, -16, -9, -13);

vertex(-14, -14);
bezierVertex(-11, -14, -14, 15, -16, 16);
bezierVertex(0, 14, 13, 15, 15, 17);
bezierVertex(13, 9, 16, 5, 15, 6);
bezierVertex(2, 9, 4, 9, -2, 9);
vertex(-2, 2);
vertex(6, 4);
vertex(6, -2);
vertex(-2, -2);
vertex(-2, -8);
bezierVertex(2, -9, 9, -6, 15, -3);
bezierVertex(15, -7, 14, -9, 16, -14);
endShape();
      
popMatrix();
    },
    
     F : function(x, y, size) {
        pushMatrix();
           translate(x, y);
        scale(size/50);
        
      beginShape();
vertex(18, -20);
bezierVertex(13, -21, 2, -21, -2, -19);
vertex(-2, -20);
vertex(-13, -20);
vertex(-13, -17);
vertex(-17, -16);
vertex(-13, -15);
bezierVertex(-14, -16, -12, 8, -17, 17);
bezierVertex(-1, 13, -10, 16, -2, 15);
bezierVertex(-3, 9, -4, 4, -3, 0);
bezierVertex(1, 0, 7, 4, 7, 5);
bezierVertex(5, 2, 7, -7, 7, -5);
bezierVertex(2, -7, 1, -4, -3, -5);
vertex(-3, -13);
vertex(17.5, -7);
endShape(CLOSE);
      
popMatrix();
    },
    
     r : function(x, y, size) {
        pushMatrix();
           translate(x, y);
        scale(size/50);
        
        beginShape();
vertex(17, -8);
bezierVertex(13, -15, 2, -17, -19, -14);
bezierVertex(-16, -8, -17, -5, -18, -3);
bezierVertex(-16, -4, -12, -5, -13, -5);
bezierVertex(-12, 2, -12, -5, -13, 1);
bezierVertex(-12, 2, -15, 2, -18, 0);
bezierVertex(-15, 5, -15, 4, -13, 5);
bezierVertex(-13, 7, -16, 13, -17, 18);
bezierVertex(-12, 15, -3, 15, -3, 16);
vertex(-3, 8.5);
bezierVertex(1, 10, 2, 7, 3, 8);
bezierVertex(3, 10, 5, 7, 5, 17);
bezierVertex(10, 14, 20, 13, 19, 13);
bezierVertex(14, 9, 14, 8, 11, 4);
bezierVertex(21, -7, 19, -6, 19, -8);
vertex(9, -6);
vertex(5.5, -5);
bezierVertex(3, 2, -2, 3, -3, 2);
vertex(-3, -7);
bezierVertex(4, -8, 8, -8, 8, -5);
endShape(CLOSE);
      
popMatrix();
    },
    
     g : function(x, y, size) {
        pushMatrix();
           translate(x, y);
        scale(size/50);
        
        beginShape();
vertex(19, -18);
bezierVertex(-3, -24, -19, -9, -18, 1);
vertex(-20, 0);
bezierVertex(-18, 24, 3, 22, 10, 19);
vertex(11, 21);
vertex(17, 20);
vertex(17, 14);
bezierVertex(18, 11, 19, 12, 20, 6);
vertex(17, 8);
bezierVertex(17, 9, 16, 5, 19, -1);
bezierVertex(12, 2, 9, 1, 4, 0);
bezierVertex(4, 2, 9, 13, 7, 12);
bezierVertex(5, 11, -5, 15, -5, 0);
vertex(-8, 1);
bezierVertex(0, -14, 16, -6, 18, -4);
bezierVertex(17, -5, 18, -15, 19, -18);
endShape();
      
popMatrix();
    },

    };
    
    /// colors used in the logo text
 var Logocol1 = color(255, 255, 255);
  var Logocol2 = color(255, 255, 0);  
 

/// Images

{  background(255, 0);
    pushMatrix();
    translate(145, 152);
    scale(1.5);
    //text("CodeForge", width/2, height/2);    
    fill(163, 163, 163);
noStroke();
chars.C(-60, -71, 50);
chars.o(-19, -71, 50);
chars.d(22, -71, 50);
chars.e(58, -71, 50);

chars.F(-80, -13, 50);
chars.o(-41, -13, 50);
chars.r(1, -13, 50);
chars.g(39, -13, 45);
chars.e(76, -13, 50);

fill(255);

chars.C(-55, -71, 50);
chars.o(-14, -71, 50);
chars.d(26, -71, 50);
chars.e(63, -71, 50);

chars.F(-75, -13, 50);
chars.o(-36, -13, 50);
chars.r(6, -13, 50);
chars.g(44, -13, 45);
chars.e(81, -13, 50);

popMatrix();
}var LogoText = get(0, 0, 300, 200);
{background(255, 0);

for(var i = 0;i < 200; i ++) {
    stroke(lerpColor(Logocol1, Logocol2, i/200));
    line(0, i, 300, i);
}

stroke(255);
strokeWeight(10);

line(0, 200, 50, 0);
line(120, 200, 200, 0);

}var LogoTextCol = get(0, 0, 300, 200);

{background(255, 0);
    
    strokeWeight(2);
for(var i = 0;i < 100;i ++) {
    for(var j = 0;j < 100;j ++) {
        stroke(noise(i*0.01, j*0.01)*205, 40);
    point(i, j);
    
    }
}
}var Texture = get(0, 0, 100, 100);
{background(255, 0);
    
    strokeWeight(2);
for(var i = 0;i < 100;i ++) {
    for(var j = 0;j < 100;j ++) {
        var col = noise(i*0.1, j*0.1);
        noStroke();
        fill(col*695, col*250, 0);
    rect(i*5, j*5, 5, 5);
    
    }
}
}var lava = get(0, 0, 100, 100);
var lava2 = get(0, 50, 100, 100);
{background(255, 0);//transparent background

stroke(66, 51, 28);
strokeWeight(2);

//dark shading & outline
fill(89, 71, 60);

beginShape();
vertex(4, 9);
vertex(7, 21);
vertex(10, 21);
vertex(17, 37);
vertex(25, 37);
vertex(35, 48);
vertex(58, 48);
vertex(60, 37);
vertex(71, 31);
vertex(71, 24);
vertex(76, 9);
endShape();

//top of the rock
fill(112, 88, 73);
rect(2, 2, 75, 6, 3);

//light shading
noStroke();

beginShape();
vertex(11, 9);
vertex(15, 21);
vertex(20, 21);
vertex(27, 33);
vertex(29, 33);
vertex(39, 43);
vertex(58, 43);
vertex(59, 37);
vertex(70, 30);
vertex(70, 24);
vertex(74, 9);
endShape();

}var rock = get(0, 0, 80, 50);
{background(255, 0);

//darkest
    fill(89, 71, 60);
    stroke(66, 51, 28);
    strokeWeight(2);
    
beginShape();
vertex(34, 2);
vertex(58, 9);
vertex(60, 16);
vertex(67, 17);
vertex(74, 43);
vertex(57, 74);
vertex(49, 73);
vertex(23, 82);
vertex(2, 50);
vertex(11, 42);
vertex(10, 22);
endShape(CLOSE);

//lightest
fill(112, 88, 73);
noStroke();

beginShape();
vertex(38, 5);
vertex(57, 12);
vertex(60, 16);
vertex(67, 18);
vertex(73, 43);
vertex(57, 72);
vertex(51, 71);
vertex(24, 75);
vertex(9, 51);
vertex(17, 42);
vertex(15, 23);
endShape(CLOSE);

}var fallRock = get(0, 0, 76, 84);
{background(255, 0);

    
    stroke(74, 62, 52);
    strokeWeight(2);

    fill(99, 87, 66);
 beginShape();
vertex(19, 40);
vertex(40, 18);
vertex(62, 19);
vertex(72, 15);
vertex(86, 15);
vertex(100, 18);
vertex(118, 38);
vertex(123, 67);
vertex(124, 84);
vertex(129, 100);
vertex(102, 109);
vertex(61, 109);
vertex(19, 106);
vertex(9, 82);
vertex(16, 57);
endShape(CLOSE);

noStroke();
    fill(140, 131, 116);
beginShape();
vertex(21, 40);
vertex(42, 20);
vertex(57, 21);
vertex(73, 17);
vertex(86, 20);
vertex(91, 25);
vertex(104, 38);
vertex(114, 67);
vertex(116, 84);
vertex(111, 100);
vertex(102, 106);
vertex(61, 106);
vertex(19, 103);
vertex(11, 82);
vertex(18, 57);
endShape();

stroke(102, 96, 87);
strokeWeight(4);
line(48, 64, 75, 65);
line(75, 65, 64, 55);
line(76, 65, 63, 75);

}var arrowRock = get(8, 13, 126, 98);
{background(255, 0); 

  
  stroke(66, 51, 28);
strokeWeight(2);

//dark shading & outline
fill(89, 71, 60);
    
 beginShape();
vertex(-1, 220);
vertex(61, 220);
vertex(63, 227);
vertex(64, 240);
vertex(62, 259);
vertex(65, 276);
vertex(65, 300);
vertex(74, 320);
vertex(73, 339);
vertex(69, 359);
vertex(76, 380);
vertex(77, 401);
vertex(-1, 401);
endShape(CLOSE);

fill(112, 88, 73);
noStroke();

beginShape();
vertex(55, 221);
vertex(56, 238);
vertex(52, 253);
vertex(54, 273);
vertex(54, 298);
vertex(59, 319);
vertex(64, 330);
vertex(60, 352);
vertex(59, 365);
vertex(66, 380);
vertex(67, 401);
vertex(-1, 401);
vertex(-1, 222);
endShape();

}var startRock = get(0, 220, 78, 180);

LogoTextCol.mask(LogoText);

/// Keyboard stuff
var keys = [];
keyPressed = function() { 
    
    keys[keyCode] = true;
    
    
if (screen === "Menu") {
    
    if(keyCode === 8) {
        Name = Name.slice(0, -1);
}
else if (keyCode !== 16 && keyCode !== UP && keyCode !== RIGHT && keyCode !== LEFT && keyCode !== DOWN && keyCode !== 10 && key.toString() !== "*" && Name.length < 11){
Name += String(key);
}

}


    if(key.toString() === "*") {
        println("vv Comment this in the T&T to be placed in the highscores. vv");
        println("{score: "+round(topScore/2)+", name: \""+Name+"\"},");
    }

};
keyReleased = function() { keys[keyCode] = false; };


///Square Collision functions
var topCollide = function(sld, sld2) {
    
    
    //Top collide
  if (sld2.x + sld2.w >= sld.x && sld2.x <= sld.x + sld.w && sld2.y + sld2.h >= sld.y && sld2.y + sld2.h < sld.y + sld2.ySpeed+2 && sld2.ySpeed > 0) {
    
    return true;
    
}else { return false; }

    
    
};
var leftCollide = function(sld, sld2) {
    
     //Left collide
   if (sld2.x  <= sld.x + sld.w && sld2.x > sld.x + sld.w - 2 && sld2.y + sld2.h >= sld.y && sld2.y <= sld.y + sld.h && sld2.xSpeed < 0) {
    
    return true;
    
}else { return false; }
    
    
};
var rightCollide = function(sld, sld2) {
    
    //Right collide
    if (sld2.x + sld2.w >= sld.x && sld2.x + sld2.w < sld.x + 2 && sld2.y + sld2.h >= sld.y && sld2.y <= sld.y + sld.h && sld2.xSpeed > 0) {
    
    return true;
    
}else { return false; }
   
    
    
};

/// Circle-Box collisions
var cirColRight = function(cir, box, perY) {
                         //circle, square, square perimeter
if (cir.x + cir.w/2 <= box.x + box.w/2 && cir.y + cir.h/2 >= box.y && cir.y - cir.h/2 <= box.y + box.h && dist(cir.x, this.y, box.x, perY) < cir.w/2 && box.xSpeed < 0) {
    
    return true;
    
}

};
var cirColLeft =  function(cir, box, perY) {

if (cir.x - cir.w/2 >= box.x + box.w/2 && cir.y + cir.h/2 >= box.y && cir.y - cir.h/2 <= box.y + box.h && dist(cir.x, cir.y, box.x + box.w, perY) < cir.w/2 && box.xSpeed > 0) {
    
    return true;
    
}

};
var cirColDown =  function(cir, box, perX) {
    
if (cir.y + cir.h/2 <= box.y + box.h/2 && cir.x + cir.w/2 >= box.x && cir.x - cir.w/2 <= box.x + box.w && dist(cir.x, cir.y, perX, box.y) < cir.w/2 && cir.ySpeed > 0) {
    
    return true;
    
}

};

/// X collisions
var leftStop = function(sld, sld2) {
    
     //Left collide
   if (sld2.x  <= sld.x && sld2.x > sld.x - 2 && sld2.xSpeed < 0) {
    
    return true;
    
}else { return false; }
    
    
};
var rightStop = function(sld, sld2) {
    
    //Right collide
    if (sld2.x + sld2.w >= sld.x + sld.w && sld2.x + sld2.w < sld.x + sld.w + 2 && sld2.xSpeed > 0) {
    
    return true;
    
}else { return false; }
   
    
    
};


/// Player function
var Player = {
    
    x: 0,
    y: 0, 
    w: 17,
    h: 31,
    
    inX: 100,
    inY: 150,
    
    xDif: 0,
    yDif: 0,
    
    startX : 20,
    startY : 150,
    
    xSpeed: 0,
    ySpeed: 1.5,
    
    jump : false,
    
    walkCount: 0,
    walkVel: 0,
    walkDif: 0,
    walkDir: 1,

    
    draw : function(Cam) {
        
        
    var walkSin = sin(radians(this.walkCount));
    var walkCos = cos(radians(this.walkCount));

pushMatrix();
        
translate(this.x+10, this.y+10);
scale(0.4*this.walkDir, 0.4);


 

strokeWeight(2);
stroke(80);

rectMode(CENTER);


//hand and leg
fill(173, 173, 173);
rect(-10*walkSin, 3*walkCos+50, 15, 10, 2);
rect(10*walkSin, 34, 10, 8, 2);

//body
fill(173);
rect(0, 31, 21, 29, 4);

noStroke();
fill(194);
rect(2, 27, 17, 29, 4);

//head
stroke(80);
fill(173);
rect(0, 0, 50, 50, 6);

noStroke();
fill(194);
rect(3, 0, 41, 46, 6);


//eye
if (frameCount % 200 > 15) {
   
    fill(0);
rect(15, 0, 10, 22, 3);

fill(255, 255, 255);
rect(16, -6, 6, 9, 1);

}
else{ 
    stroke(110, 110, 110);
    line(10, 0, 20, 0);
}

//hand and leg

stroke(80);
fill(194, 194, 194);
rect(10*walkSin, -3*walkCos+56, 15, 10, 2);

rect(-10*walkSin, 34, 10, 8, 2);


popMatrix();
        
        
        
        this.control();
        this.walkUpdate(Cam);
    },
    control: function() {
        
        this.inX += this.xSpeed;
        this.inY += this.ySpeed;
        
        this.xDif = this.inX - this.startX;
        this.yDif = this.inY - this.startY;
        
        if (keys[RIGHT]) {
            this.xSpeed = 1.5;
        }
        else if (keys[LEFT]) {
            this.xSpeed = -1.5;
        }
        else {this.xSpeed /= 1.07;}
        
        if (keys[UP] && this.jump) {
            this.ySpeed = -2;
        }
        
             this.ySpeed += 0.05;
        this.jump = false;
        
    },
    walkUpdate : function(Cam) {
        
        var vel = constrain(this.walkVel, 0, 5);
        
        this.walkDif = 360 - this.walkCount;
        
        if (keys[RIGHT]) {
            this.walkDir = 1;
        }else if (keys[LEFT]) {
            this.walkDir = -1;
            
        }
        
        if (keys[RIGHT] || keys[LEFT]) {
            this.walkCount += vel;
            this.walkVel += 0.5;
            
        }else {
          this.walkDif /= 1.06;
          this.walkCount = 360 - this.walkDif;  
        }
        
        if (this.walkCount > 360) {
            
            this.walkCount = 0;
            
        }
        
        this.x = this.inX + Cam.x;
        this.y = this.inY - Cam.y;
    }
};


///// Floating rocks function
var Blocks = (function() {
    
Blocks = function(x, y, w, h, friend, y2) {
    
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.inX = x;
    this.inY = y;
    
    this.y2 = y2;
    
    this.friend = friend;
    
    this.hit = false;
};
Blocks.prototype.draw = function(Cam, coll) {

    
    fill(200);
    image(rock, this.x, this.y + this.y2);
    
    this.update(Cam, coll);
};
Blocks.prototype.update = function(Cam,coll) {
    
    this.x = this.inX + Cam.x;
    this.y = this.inY - Cam.y;
    
    if (coll && !this.hit) {
        
        this.inY += 0.7;
        
    }
  else if (this.hit) {
      this.inY += 0.2;
  }
  
  this.y2 /= 1.07;
    
};

return Blocks;
})();
for(var i = 0; i < 5; i ++) {
    
rocks.push(new Blocks(i*150+150, 220, 80, 10, round(random(1, 2)), 0));

}


/// AI function
var AIs = (function(){
    
    AIs = function(x, y) {
    this.x = x;
    this.y = y;
    this.w = 17;
    this.h = 31;
    
    this.inX = x;
    this.inY = y;
    
    this.xSpeed = 0;
    this.ySpeed = 0;
    
    this.jump = false;
    
    this.walkCount = 0;
    this.walkVel = 0;
    this.walkDif = 0;
    this.walkDir = 1;
    
    
    this.AI = 0;
    
    this.dead = false;
    
    };
    AIs.prototype.display = function(Cam) {
        
        
    var walkSin = sin(radians(this.walkCount));
    var walkCos = cos(radians(this.walkCount));

pushMatrix();
    
translate(this.x+10, this.y+10);
scale(0.4*this.walkDir, 0.4);


 

strokeWeight(2);
stroke(80);

rectMode(CENTER);


//hand and leg
fill(89, 71, 60);
rect(-10*walkSin, 3*walkCos+50, 15, 10, 2);
rect(10*walkSin, 34, 10, 8, 2);

//body
fill(89, 71, 60);
rect(0, 31, 21, 29, 4);

noStroke();
fill(125, 100, 85);
rect(2, 27, 17, 29, 4);

//head
stroke(80);
fill(89, 71, 60);
rect(0, 0, 50, 50, 6);

noStroke();
fill(138, 113, 98);
rect(3, 0, 41, 46, 6);



//eye
if (frameCount % 200 > 15) {
    
    fill(0);
rect(15, 0, 10, 22, 3);

fill(255, 255, 255);
rect(16, -6, 6, 9, 1);

}
else{
    stroke(110, 110, 110);
    line(10, 0, 20, 0);
}

//hand and leg

stroke(80);
fill(153, 124, 106);
rect(10*walkSin, -3*walkCos+56, 15, 10, 2);

rect(-10*walkSin, 34, 10, 8, 2);


popMatrix();
        
        
        
        this.update(Cam);
        this.walkUpdate();
    };
    AIs.prototype.update = function(Cam) {
        /**
        AI list:
        1 - left
        2 - right
        3 - jump
        **/
        
 this.inX += this.xSpeed;
        this.inY += this.ySpeed;

        if(frameCount % 50 === 0 ) {
        this.AI = floor(random(0, 5));
        }

 
        if (this.AI === 0) {
            this.xSpeed = 0;
        }
        
        else if (this.AI === 1) {
            this.xSpeed = 1.5;
        }
        else if (this.AI === 2) {
            this.xSpeed = -1.5;
        }
        else {this.xSpeed /= 1.07;}
        
         if (this.AI === 3 && this.jump) {
            this.ySpeed = -2;
        }
        //if(this.AI === 4 && frameCount%10 === 0) {
    //Stones.push(new stones(this.x+10, this.y+20, this.walkDir*3)); 
        //}
                
 
        
        this.ySpeed += 0.05;
        this.jump = false;
                           
           
               this.x = this.inX + Cam.x;
        this.y = this.inY - Cam.y;

    };
    AIs.prototype.walkUpdate = function() {
               
        var vel = constrain(this.walkVel, 0, 5);
        
        this.walkDif = 360 - this.walkCount;
        
        if (this.AI === 1) {
            this.walkDir = 1;
        }else if (this.AI === 2) {
            this.walkDir = -1;
            
        }
        
        if (this.AI === 1 || this.AI === 2) {
            this.walkCount += vel;
            this.walkVel += 0.5;
            
        }else {
          this.walkDif /= 1.06;
          this.walkCount = 360 - this.walkDif;  
        }
        
        if (this.walkCount > 360) {
            
            this.walkCount = 0;
            
        }
     

    };
   
    
    return AIs;
})();


/// Falling rocks function 
var FallingRock = (function() {

FallingRock = function(x, y, w, h) {

this.x = x;
this.y = y;

this.inX = x;
this.inY = y;

this.w = w;
this.h = h;

this.r = 0;

this.ySpeed = 1;

this.broken = false;

};
FallingRock.prototype.draw = function(Cam) {

imageMode(CENTER);

    pushMatrix();
    
    translate(this.x, this.y);
    rotate(radians(this.r));
    
image(fallRock, 0, 0, this.w, this.h);

popMatrix();

this.update(Cam);    
};
FallingRock.prototype.update = function(Cam) {
this.x = this.inX + Cam.x;
this.y = this.inY - Cam.y;
this.inY += this.ySpeed;

this.r --;
};

return FallingRock;
})();


//// Spark particle function
var spark = (function(){
    
    spark = function(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.col = 255;
    };
    spark.prototype.display = function() {
        
        
        fill(255, 213, 0, this.col);
        noStroke();
        
rect(this.x, this.y, 3, 3);
        this.update();
      
    };
    spark.prototype.update = function() {
    this.col -= 2+this.speed;    
    this.y -= 1.5;
    this.x += this.speed;
    this.x += 0.5*sin(radians(this.y*2));   
    };
    spark.prototype.die = function() {
        return this.col <= 0;
    };
     
    return spark; 
})();


//// Broken rock particle function
var splash = (function(){
    
    splash = function(x, y, speed) {
        this.x = x;
        this.y = y;
        this.num = 0;
        this.vel = random(-2, -3);
        this.speed = speed;
        this.fade = 25;
        this.time = 0;
    };
    splash.prototype.display = function(){
        noStroke();
        fill(97, 74, 59);
        
        ellipse(this.x, this.y, this.fade, this.fade);
    
        fill(66, 37, 21, 50);
        
        ellipse(this.x+2, this.y+2, this.fade-4, this.fade-4);
        
        this.update();
    };
    splash.prototype.update = function(){
        
        this.fade -= 0.5;
        

        this.vel += 0.098;
        this.y += this.vel;
        
      
        this.x += this.speed;
        this.x -= 0.7;
            
    };
    
    return splash;
})();



/// Transition function 
var tranCol = color(87, 50, 25), tran = 0;//Transition Color, transparency 

var transition = function() {

    tran /= 1.07;
    
    
fill(tranCol, tran);

rectMode(CORNER);
rect(0, 0, width, height);


};




draw = function() {
    

var highScores = [
{score: 3534, name: "CodeForge"},
{score: 0, name: "undefined"},
{score: round(abs(topScore/2)), name: (Name.length < 1 ? "You" :Name)},
];

    //sorts the highscores from highest to lowest
        highScores = highScores.sort (function(a, b) {
            
            return b.score - a.score;
        });
        
        
    
background(122, 108, 99);
    
    var P = Player;
    
    //////////LOGO/////////////
    if(screen === "Logo") {
        background(97, 0, 0);   

fill(120, 49, 49, 80);
for (var i = 4; i < 12; i++) {
    ellipse(width/2, height/2, i*50, i*50);
}

imageMode(CENTER);
image(LogoTextCol, width/2, height/2);


if (frameCount > 555) {
    screen = "Menu";
}
    }
    
    ///////////MENU/////////////
    if (screen === "Menu") {
        if (keyCode === 33) {
            translate(0, 80);
            scale(1, 4/6);
        }
        
        image(Texture, 0, 0, width, height);
           
        // the big gray rock
        image(arrowRock, 430, 135);
        
        /// floor
          rectMode(CORNER);
        fill(112, 88, 73);
        strokeWeight(2);
         stroke(66, 51, 28);
         
        rect(0, 222, width, 180);
        
        //wall
        image(startRock, 0, 43);
        image(startRock, -16, -135);
        
        noStroke();
        
        /// Title
        
        fill(66, 33, 4);
        textAlign(CENTER, CENTER);
        textFont(createFont("impact"), 100);
        //text("Rock Hop", width/2, 50);
        
        letters.P(464, 51);
        letters.O(412, 51);
        letters.H(359, 51);
        letters.K(293, 51);
        letters.C(240, 51);
        letters.O(188, 51);
        letters.R(138, 51);
        
        if (keyCode !== 33) {
        
       
        //name slot
        fill(245, 50);
        rect(width/2-77, height/2+40, 151, 50, 10);
        fill(255, 50);
        rect(width/2-73, height/2+40, 145, 45, 10);
        
        // left/right button graphics(squares)
        rect(width/2+35, height/2 + 120, 40, 40, 5);
        rect(width/2-75, height/2 + 120, 40, 40, 5);
        
        //up button graphic (squares)
        rect(width/2 - 30, height/2 + 120, 60, 40, 5);
        
        textSize(20);
        fill(214, 214, 214);
        
///displays name 
        text(((Name.length < 1) ? "Nickname" : Name) + ((frameCount% 80 > 30) ? "|" : " "), width/2, height/2+63);
        
        
        // Arrow key graphics(arrows)
        fill(112, 88, 73);
        textSize(30);
        
        text("↑", width/2, height/2+136);
        text("←", width/2-55, height/2+136);
        text("→", width/2+55, height/2+136);
        
        
         //scoreboard 
         rectMode(CENTER);
            textSize(20);
            
        fill(66, 33, 4, 100);
        text("Top Runners:", 80, 270);
        
        noStroke();
        rect(80, 285, 120, 5);
        
        
       //displays the top 3 scores
        for (var i = 0; i < 3; i++) {
         text(highScores[i].name + ": "+highScores[i].score, 80, 300+i*20);   
        }
        
        //displays your top score
        textSize(25);
        
          fill(66, 33, 4, 100);
        text("Your top score:", width-100, 270);
        
        noStroke();
        rect(width-100, 285, 120, 5);
        
        text(round(abs(topScore/2)), width-100, 300);
        
    }
        
        //draws the player
        P.draw(cam);
        
        //player collisions
        if (P.y + P.h > 220 && P.ySpeed > 0) {
            
            P.ySpeed = 0;
            P.jump = true;
        }
        
        if (P.x < 78 && P.xSpeed < 0) {
         P.xSpeed = 0;   
        }
        
        if(P.x > width) {
            P.x = 0;
            P.inX = 0;
            
            tran = 255;
            screen = "Game";
            
        }
        
       
    imageMode(CORNER);
    image(lava, 0, 378-cam.y, width+5, height); 

    }
    
    ///////////GAME/////////////
    if (screen === "Game") {
    
    Start.x = cam.x;
    Start.y = cam.y+220;
    
   
    
    
    score = cam.x*-1;
    
    if (abs(cam.x) < 1 && P.x < 150) {
    Start.ready = false;
    }
    else if (Player.x > 150){
     Start.ready = true;  
    }
    
    
    /************ Camera Control & Reset control ***********/
    
    if (Start.ready) {
        
    if (!cam.Reset) {    
    cam.x -= cam.speed;
    }
    
    } 
    
    
    if (!cam.Reset) {
    
 if (Player.y > height-100) {
     
     cam.y += Player.ySpeed;
     
 }
 
    } else if (cam.Reset) {
        
        if(score+P.x + P.w > topScore) {
        topScore = abs(cam.x) + P.x + P.w;
        }
        cam.x /= 1.2;
        cam.y /= 1.2;
    
        
        Player.xDif /= 1.2;
      Player.yDif /= 1.2;

   P.inX = P.startX + P.xDif;
   P.inY = P.startY + P.yDif;
   
   
   P.ySpeed = 0;
   fallingrocks.length = 0;
   ai.length = 0;
   
   if (abs(cam.x) > 600) { 
   ai.length = 0;
   }
        
        if (abs(cam.x) < 0.1 && Player.y < 150.1) {
            cam.Reset = false;
        }
        
    }
    
     
    
    if(cam.shakeTime <= 11) {
    cam.shakeTime ++;
    }
if(cam.shakeTime <= 10) {
translate(random(-5, 5), random(-5, 5));
}
if (cam.y > 100) {
      cam.Reset = true;   
     }
     
     

 /************ Background Textures ***********/
imageMode(CORNER);
image(Texture, 0, 0, width, height);

image(lava, 0, 348-cam.y, width+5, height);

image(startRock, cam.x, 220-cam.y);

rectMode(CENTER);




 /********* Floating rocks (Platforms / Blocks)  *********/

for(var i = rocks.length-1;i >= 0; i --) {
   
    var rocki = rocks[i];
rocks[i].draw(cam, topCollide(rocki, Player), rocki);


for (var k = 0; k < ai.length; k++) {
   

/// AI platform collisions
if (leftStop(rocki, ai[k])) {
    ai[k].AI = 1;
    
}
if (rightStop(rocki, ai[k])) {
    ai[k].AI = 2;

}
    if (topCollide(rocki, ai[k])){
        
        ai[k].ySpeed = 0;
        ai[k].jump = true;
    }
    ///
    
}//end enemy loop


if(rocki.friend  === 1) {
    
     ai.push(new AIs(rocki.inX, rocki.y-50)); 

    rocki.friend = 0;
    
}


//platform and player collisions
 if (rightCollide(rocki, Player)) {
        
   Player.xSpeed = 0;
    }
    if (leftCollide(rocki, Player)) {
        
        Player.xSpeed = 0;
        
    }
    if (topCollide(rocki, Player)) {
        Player.jump = true;
        Player.ySpeed = 0;
    }

if (rocki.x < -150) {

rocks.push(new Blocks (width - cam.x, 220, 80, 10, round(random(1, 3)), 200));
rocks.splice(i, 1);

}




if (cam.Reset) {
rocks[0].inX = 150;
rocks[1].inX = 300;
rocks[2].inX = 450;
rocks[3].inX = 600;
rocks[4].inX = 750;

if (rocki.inY > 220) {
    rocki.inY = 220;
}

if (rocki.hit) {
    rocki.hit = false;
}
}


for (var j = 0; j < fallingrocks.length; j++) {
var fallr = fallingrocks[j];

if (cirColDown(fallr, rocki, constrain(fallr.x, rocki.x, rocki.x + rocki.w))) {
    
    rocki.hit = true;
    fallingrocks[j].broken = true;
    
}    
    
 
}//end falling rocks loop



}// end rocks loop

 /************ Player stuff ***********/
    Player.draw(cam);
    
  if (topCollide(Start, Player)) {
        
        Player.ySpeed = 0;
        Player.jump = true;
        
    }
    
  if (leftCollide(Start, Player)) {
  
  Player.xSpeed = 0;
  
  }  
  
  if (P.x + P.w >= width && P.xSpeed > 0) {
      
      P.xSpeed = 0;
      
  }
  
  if (P.x + P.w <= 0 && abs(cam.x) <= 1) {
  
   P.inX = width-P.w;
   tran = 255;
  screen = "Menu";
 
  } 

 if (P.x + P.w < -20 && Start.ready) {
     
     cam.Reset = true;
     
 }
    
 /************ AI  ***********/  
     
    for(var i = ai.length-1; i >= 0; i --) {
        var e = ai[i];
      
        e.display(cam);
        
        
        if (e.y > height) {
            
            e.dead = true;
            
        }
        
        if (e.dead) {
            
            ai.splice(i, 1);
        }
        
        for (var f = 0; f < fallingrocks.length; f++) {
            
            if (cirColDown(fallingrocks[f], e, constrain(fallingrocks[f].x, e.x, e.x + e.w))) {
                
                e.dead = true;
                fallingrocks[f].broken = true;
                
            }
            
        }
    }
    
    
    /************ Falling Rocks ***********/
    
      for (var i = fallingrocks.length-1; i >= 0 ; i--) {
         var fr = fallingrocks[i];
     
        fr.draw(cam);
        
        
        //  Rock and player collisions
        if (cirColDown(fr, Player, constrain(fr.x, Player.x, Player.x + Player.w))) {
            
            fr.broken = true;
            cam.Reset = true;
            
        }   
         if (cirColLeft(fr, Player, constrain(fr.y, Player.y, Player.y + Player.h))) {
            
            fr.broken = true;
            cam.Reset = true;
            
        } 
         if (cirColRight(fr, Player, constrain(fr.y, Player.y, Player.y + Player.h))) {
            
            fr.broken = true;
            cam.Reset = true;
        } 
        
        
        // Deletes the rocks when they "break"
        if (fr.broken) {
            
            for(var k = 0;k < 10;k ++) {
        Splash.push(new splash(fr.x, fr.y+fr.h/2, random(-1, 1)));
            }
        cam.shakeTime = 0;
    }
    
    if (fr.broken || fr.y > height) {
        fallingrocks.splice(i, 1);
    }
    
    
    }//end falling rocks loop
    

    // Adds falling rocks to their array
    
    if (frameCount % 100 === 0 && Start.ready) {
        
        fallingrocks.push(new FallingRock(random(200, width+150)-cam.x, -50, 50, 50));
        
    }
    
    
   /************ Rock Particles ***********/
  
            for(var i = Splash.length-1; i >= 0; i --){
        Splash[i].display(cam);
            if(Splash[i].fade  < 0.001) {
            Splash.splice(i, 1);    
    } 
    }
    
    
   
 /************ High-Score Markers ***********/
        textSize(15);
        
        for(var i = 0;i < highScores.length;i ++) {
            rectMode(CORNER);
            noStroke();
            
            if (highScores[i].score > 0) {
fill(255, 213, 0, 255-dist(Player.x, 200, cam.x+highScores[i].score*2, 200));
    pushMatrix();
        translate(cam.x+highScores[i].score*2+10, 200);
          rotate(90);
    text(highScores[i].name, 4, 0);
    popMatrix();        
            rect(cam.x+highScores[i].score*2, 0, 2, height);
            }
        }

rectMode(CENTER);


 /************ Highest Score Distance ***********/

fill(0, 150);
textSize(20);

if ((abs(cam.x) + P.x + P.w) < highScores[0].score*2)  {
text("Distance To Highest Score:\n"+round((highScores[0].score*2 - (abs(cam.x) + P.x + P.w))/2), width/2, 30);
}else {
   
   text("Distance To Highest Score:\nNew Highscore!", width/2, 30); 
    
}

 /************ Lava Texture ***********/
    imageMode(CORNER);
    image(lava, 0, 378-cam.y, width+5, height);

}

  ////////////GLOBAL///////////{

    ////  Sparks  ////
    
    for(var i = 0;i < sparks.length; i ++) {
        sparks[i].display();
        
        if(sparks[i].die()) {
            sparks.splice(i, 1);
        }
        
    }//end spark loop
    if(frameCount%5 === 0) {
    sparks.push(new spark(random(0, width), 407, random(-1, 1)));
    }
    
if (screen === "Logo") {
    
    fill(77, 23, 10, frameCount-300);
    rect(0, 0, width, height);
}
if (screen === "Menu" && frameCount < 810) {
            
   fill(77, 23, 10, 255-(frameCount-555));
    rect(width/2, height/2, width, height);
}

    transition();
    
//}

};
         
         }};

    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas"); 
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processingInstance = new Processing(canvas, sketchProc); 

