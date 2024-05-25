let img1, img2, img3, img4, img5, img6, img7, img8, img9;
let myFont, myBoldFont, myLightFont;
let angle = 0;
let currentHeaderIndex = -1;
let headersVisible = false;
let beat;

function preload() {
  img1 = loadImage('images/CoffeeCup.png');
  img2 = loadImage('images/CoffeeCupsText.png');
  img3 = loadImage('images/Recycle.png');
  img4 = loadImage('images/Group1.png');
  img5 = loadImage('images/Group2.png');
  img6 = loadImage('images/Group3.png');
  img7 = loadImage('images/Group4.png');
  img8 = loadImage('images/Group5.png');
  img9 = loadImage('images/Group6.png');
  myFont = loadFont('Montserrat/static/Montserrat-Medium.ttf');
  myBoldFont = loadFont('Montserrat/static/Montserrat-BoldItalic.ttf');
  myLightFont = loadFont('Montserrat/static/Montserrat-LightItalic.ttf');
  beat = createAudio('music/podcast-jazz-music-168726.mp3');
}

function setup() {
  createCanvas(800, 1200);
  textStyle(ITALIC);
  textAlign(CENTER, CENTER);
  textLeading(49.34);

  mousePressed = function(){
    headersVisible = true;
    currentHeaderIndex++;
    if(currentHeaderIndex >=6){
      currentHeaderIndex = 0; //reset index when all headers are displayed
    }
  }

  beat.showControls();
  beat.id('myAudio');
  let audioElement = document.getElementById('myAudio');
  audioElement.style.position = 'absolute';
  audioElement.style.top = '1100px';
  audioElement.style.left = '670px';
  audioElement.style.width = '100px';
  audioElement.style.height = '60px';
  audioElement.style.border = '10px';
}

function draw() {
  background('#254e48');
  drawTitle();
  drawImages();
  drawDivider();
  drawTextElements();
  if (headersVisible) {
    drawSingleHeader(currentHeaderIndex); // Draw single header based on current index
  }
  drawGreenBorder();
  drawReferenceText();
  drawSteam();
}

function drawSteam(){
  fill(255, 150); // Semi-transparent white
  noStroke();

  // Calculate the offset using the sin function to create oscillating motion
  let xOffset1 = sin(angle) * 5; // Adjust the amplitude as needed
  let yOffset1 = cos(angle) * 2;
  let xOffset2 = -sin(angle + PI / 2) * 5;
  let yOffset2 = -cos(angle + PI / 2) * 2;
  let xOffset3 = sin(angle + PI) * 5;
  let yOffset3 = cos(angle + PI) * 2;
  let xOffset4 = -sin(angle + (3 * PI) / 2) * 5;
  let yOffset4 = -cos(angle + (3 * PI) / 2) * 2;

  ellipse(472 + xOffset1, 601 + yOffset1, 50, 30);
  ellipse(502 + xOffset2, 581 + yOffset2, 60, 40);
  ellipse(542 + xOffset3, 561 + yOffset3, 50, 30);
  ellipse(602 + xOffset4, 541 + yOffset4, 70, 50);

  // Increment the angle for the next frame
  angle += 0.05;
}

function drawGreenBorder() {
  stroke(37, 78, 72);
  strokeWeight(2);
  noFill();
  rect(0, 0, 800, 1199);
}

function drawReferenceText() {
  textFont(myLightFont);
  textSize(12);
  fill(255);
  text('References:', 25, 1010, 100, 200);
  text('The Environmentor:', 0, 1030, 200, 200);
  text('https://blog.tentree.com/6-reasons-to-choose-a-reusable-coffee-mug-over-single-use-cups/', 15, 1050, 600, 200);
}

function drawTitle() {
  textSize(55);
  fill('#F6E1C1');
  textFont('Arial'); 
  text('The Benefits of Reusable', width / 2, 60);
}

function drawImages() {
  tint(255, 127); // 50% opacity
  image(img3, 174, 411);  
  noTint();

  image(img1, 272, 491);
  image(img2, 173, 106);
  image(img4, 33, 246);
  image(img5, 495, 296);
  image(img6, 21, 538);
  image(img7, 550, 588);
  image(img8, 71, 818);
  image(img9, 464, 865);
}

function drawDivider() {
  fill(0);
  noStroke();

  // Set the noise level and scale.
  let noiseLevel = 8;
  let noiseScale = 0.02;

  // Iterate from left to right.
  for (let x = 27; x <= 770; x += 1) {
    // Scale the input coordinates.
    let nx = noiseScale * x;
    let nt = noiseScale * frameCount;

    // Compute the noise value.
    let y = noiseLevel * noise(nx, nt);

    // Draw the line segment.
    rect(x, 222 + y, 1, 8);
  }
}

function drawTextElements() {
  const texts = [
    { x: 60, y: 290, angle: -8.5, txt: 'The U.S. discards about 25 billion styrofoam cups yearly. Made from carcinogenic polystyrene, they can take up to 500 years to decompose.' },
    { x: 520, y: 320, angle: 9, txt: 'Though better than styrofoam, paper cups can release harmful melamine from their glue while they are in the process of breaking down.' },
    { x: 40, y: 586, angle: -12, txt: 'Coffee cup lids made from polystyrene (#6 plastic) leach carcinogenic styrene. Go for a safer lid or skip it altogether.' },
    { x: 577, y: 610, angle: 9, txt: 'Despite being recyclable, most cups and their cardboard sleeves are not recycled, adding to landfill waste.' },
    { x: 100, y: 880, angle: -12, txt: 'Plastic cups for iced coffee are made from recyclable #5 polypropylene, but many curbside programs do not accept them.' },
    { x: 495, y: 895, angle: 7.8, txt: 'Even if these issues do not concern you, coffee tastes better from a ceramic or high-quality double-walled stainless steel mug.' },
  ];

  texts.forEach(t => {
    if (dist(mouseX, mouseY, t.x, t.y) < 150) { // Change 30 to adjust the hover range
      drawRotatedText(t.x, t.y, t.angle, t.txt);
    }
  });
}

function drawSingleHeader(index) {
  // Function to draw a single header based on the index
  const header = [
    { x: 68, y: 212, angle: -9, txt: 'Why styrofoam cups are the worst!' },
    { x: 558, y: 240, angle: 9, txt: 'Paper cups are not much better either' },
    { x: 55, y: 512, angle: -11, txt: 'Why plastic lids are harmful' },
    { x: 610, y: 543, angle: 8.5, txt: 'Single use cups are not able to be recycled!' },
    { x: 98, y: 795, angle: -12, txt: 'Think, is plastic okay?' },
    { x: 520, y: 818, angle: 7, txt: 'The taste is far better than single used cups' },
  ];

  drawRotatedHeader(header[index].x, header[index].y, header[index].angle, header[index].txt);
}

function drawRotatedHeader(x, y, angle, txt) {
  // Rotated header drawing function
}

function drawRotatedText(x, y, angle, txt) {
  textLeading(18);
  textSize(11);
  textFont(myFont);
  fill(0);
  push();
  translate(x, y);
  rotate(radians(angle));
  text(txt, 0, 0, 190, 200);
  pop();
}

function drawRotatedHeader(x, y, angle, txt) {
  textFont(myBoldFont);
  textSize(15);
  push();
  translate(x, y);
  rotate(radians(angle));
  text(txt, 0, 0, 170, 200);
  pop();
}
