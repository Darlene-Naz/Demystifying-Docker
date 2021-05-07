// let img, cnv;

// function preload() {
//   img = loadImage("static/assets/image.jpg");
// }

// function setup() {
//   cnv = createCanvas(img.width, img.height);
//   let newCanvasX = (windowWidth - img.width) / 2;
//   let newCanvasY = (windowHeight - img.height) / 2;
//   cnv.position(newCanvasX, newCanvasY);
//   for (let col = 0; col < img.width; col++) {
//     for (let row = 0; row < img.height; row++) {
//       let c = img.get(col, row);
//       stroke(color(c));
//       point(col, row);
//     }
//   }
// }

// // function draw() {}
const colors = ["#8ad7a0", "#ef8269", "#b8a3e1", "#f8d778"];
const patterns = ["url(#pattern-stripes)", "url(#pattern-circles)"];
const allthethangs = colors.concat(patterns);

const sizes = [4, 6, 2];

let bg = document.querySelector(".bg");

bg.style.fill = gsap.utils.random(patterns);

function arc(x, y) {
  let pathString = `M ${x} ${y} l 1 0 a 1 1 0 0 1 -1 1 Z`;
  const dx = x + 0.5;
  const dy = y + 0.5;
  const rotate = 90 * Math.floor(Math.random() * 4);
  const transform = `translate(${dx} ${dy}) rotate(${rotate}) translate(${-dx} ${-dy})`;

  const color = gsap.utils.random(colors);

  return `<path d="${pathString}" stroke-linejoin="round" transform="${transform}" fill="${color}" stroke="black" stroke-width="0.05"/>`;
}

function triangle(x, y) {
  let pathString = `M ${x} ${y} l 1 0.5 l -1 0.5 z`;
  const dx = x + 0.5;
  const dy = y + 0.5;
  const rotate = 90 * Math.floor(Math.random() * 4);
  const transform = `translate(${dx} ${dy}) rotate(${rotate}) translate(${-dx} ${-dy})`;

  const color = gsap.utils.random(colors);

  return `<path d="${pathString}" stroke-linejoin="round" transform="${transform}" fill="${color}" stroke="black" stroke-width="0.05"/>`;
}

function square(x, y) {
  const dx = x + 0.5;
  const dy = y + 0.5;

  const fill = gsap.utils.random(allthethangs);
  const size = gsap.utils.random(sizes);

  return `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${fill}" stroke-linejoin="round" stroke="black" stroke-width="0.05"/>`;
}

for (let x = 0; x < 6; x++) {
  for (let y = 0; y < 6; y++) {
    let random = gsap.utils.random(1, 10, 1);
    if (random === 1) {
      document.getElementById("svg").innerHTML += triangle(x, y);
    } else if (random === 2) {
      document.getElementById("svg").innerHTML += square(x, y);
    } else if (random === 3) {
      document.getElementById("svg").innerHTML += arc(x, y);
    }
  }
}
