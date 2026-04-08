function setup() {
   createCanvas(640, 480);

  background(0, 0, 255);
  
  //Base
  strokeWeight(1)
  stroke(55, 171, 8)
  fill(55, 171, 8)
  triangle(320, 420, 180, 250, 460, 250)
  triangle(180,250, 235,180, 235,250)
  triangle(460,250, 400,180, 400, 300)
  
  rect(233, 181, 168, 85)
  
  //Brillo}
  fill(176, 219, 156)
  quad(263, 250, 300, 180, 340, 180, 375, 250)
  
  fill(255)
  stroke(255)
  quad(180,250, 235,180, 300,180, 263,250)
  
  fill(124, 164, 124)
  stroke(124, 164, 124)
  triangle(180,250, 320,420, 263,250)
  
  //Sombras
  fill(41, 101, 10)
  stroke(41, 101, 10)
  quad(375,250, 340,180, 400,180, 460,250)
  
  fill(16, 47, 6)
  stroke(16, 47, 6)
  triangle(320,420, 460,250, 375,250)
}

function draw() {
  
}