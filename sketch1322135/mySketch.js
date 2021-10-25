/* checking out Gbemi's code
*/

int flower=1;
int angle =1;

void setup() {
  size(500, 500);
  background(#5C4939);
}

void draw() {

  if (flower == 1 && mousePressed == true) {
    flowerbrush1();
  }

  if (flower == 2 && mousePressed == true) {
    flowerbrush2();
  }

  if (flower == 3 && mousePressed == true) {
     flowerbrush3();
  }
  
  if (flower == 4 ) {// to reset it at the end no need to mouse press, just 4th time key is pressed
    background(#5C4939);
  }
}

void flowerbrush1() {
  int petalSizeA= 10;
  int petalSizeB = 30;
 //they are all on top of each other
for( petalSizeA= 10; petalSizeA <= 30; petalSizeA++){
  for( petalSizeB= 30; petalSizeB >= 10; petalSizeB--){
     myPattern(mouseX, mouseY, petalSizeA, petalSizeB, #757C50);
  }
}

  //petalSizeB = petalSizeB - 1;
  //if ( petalSizeA == 30) {
  //  petalSizeA = 10;
  //}
  //if ( petalSizeB == 10) {
  //  petalSizeB = 30;
  //}
}

void flowerbrush2(){
  pushMatrix();
  translate(mouseX,mouseY);
  rotate(radians(angle));
  myPattern(0, 0, 20, 20,#F07365); 
  popMatrix();
  
  angle= angle+2;
  
}

void flowerbrush3(){//every layer is a diffrent color
  color r=0;
  color g=0;
  color b=0;
  for (r= 0; r<width/2; r= mouseX){
    myPattern(mouseX, mouseY, 25, 25, color (r, 127, 127));
  }
 
  for(g = 0; g == width/2; g = mouseX){
   myPattern(mouseX, mouseY, 25, 25, color (127, g, 127));
  }
  
  for(b = 0; b > width/2; b= mouseX){
   myPattern(mouseX, mouseY, 25, 25, color (127, 127, b));
  }
}

//5 flowers diagonal in both directions, used my part 4 of sketch 2 for reference
void myPattern(int flowerX, int flowerY, float petalsizeA, float petalsizeB, color flowerColor ) {
  fill(flowerColor, 150);
  noStroke();
  rectMode(CENTER);

  rect(flowerX - 40, flowerY - 40, petalsizeA, 50, 50);
  rect(flowerX - 40, flowerY - 40, 50, petalsizeB, 50);

  rect(flowerX, flowerY, petalsizeA, 50, 50);
  rect(flowerX, flowerY, 50, petalsizeB, 50);

  rect(flowerX + 40, flowerY + 40, petalsizeA, 50, 50);
  rect(flowerX + 40, flowerY + 40, 50, petalsizeB, 50);

  rect(flowerX - 40, flowerY + 40, petalsizeA, 50, 50);
  rect(flowerX - 40, flowerY + 40, 50, petalsizeB, 50);

  rect(flowerX + 40, flowerY - 40, petalsizeA, 50, 50);
  rect(flowerX + 40, flowerY - 40, 50, petalsizeB, 50);

  fill(#12570A);
  ellipse(flowerX -40, flowerY - 40, 20, 20);
  ellipse(flowerX, flowerY, 20, 20);
  ellipse(flowerX + 40, flowerY +  40, 20, 20);
  ellipse(flowerX - 40, flowerY + 40, 20, 20);
  ellipse(flowerX + 40, flowerY -  40, 20, 20);
}

//to have diffrent brushes
void keyPressed() {
  flower ++;
  if (flower > 4) {
    flower  = 1;
  }
}
