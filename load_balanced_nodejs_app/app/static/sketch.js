let img, cnv;

function preload() {
  img = loadImage("assets/image.jpg");
}

function setup() {
  cnv = createCanvas(img.width, img.height);
  let newCanvasX = (windowWidth - img.width) / 2;
  let newCanvasY = (windowHeight - img.height) / 2;
  cnv.position(newCanvasX,newCanvasY)
}

function draw() {}
