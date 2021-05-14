const urlSVG = "http://www.w3.org/2000/svg";
const createSVGElement = (element) => document.createElementNS(urlSVG, element);

const width = window.innerWidth;
const height = window.innerHeight;

const status = ["hidden", "visible"];

let counterItRight = 0;
const scaleFactor = 4;
let timer = 1000; // ms
let lives = 5;
let a = 0;
let b = timer; // Timer for switch pattern
// function svgdata() {
//   return "M 75.00,38.00C 75.00,38.00 72.08,53.00 72.08,53.00 72.08,53.00 67.00,64.00 67.00,64.00 65.56,59.42 67.98,58.09 69.31,54.00 69.31,54.00 71.00,44.00 71.00,44.00 71.00,44.00 67.00,47.00 67.00,47.00 67.00,47.00 64.00,43.00 64.00,43.00 63.56,44.63 63.34,46.11 62.15,47.44 59.77,50.10 51.51,50.83 48.52,49.02 46.90,48.05 45.15,45.53 44.00,44.00 44.00,44.00 49.45,41.27 49.45,41.27 49.45,41.27 46.73,37.27 46.73,37.27 46.73,37.27 58.55,36.55 58.55,36.55 58.55,36.55 65.27,40.18 65.27,40.18 65.27,40.18 64.37,33.00 64.37,33.00 63.31,27.48 64.36,21.96 57.00,18.31 50.48,15.09 44.35,19.22 35.00,15.00 35.00,15.00 37.00,17.00 37.00,17.00 37.00,17.00 38.00,17.00 38.00,17.00 34.84,18.01 32.70,16.94 30.02,18.57 20.68,24.24 22.00,35.77 22.00,45.00 22.00,45.00 34.00,43.00 34.00,43.00 29.78,41.14 29.48,41.31 25.00,42.00 32.07,35.49 41.89,41.32 39.94,47.88 38.40,53.08 27.81,52.55 25.65,51.01 24.27,50.03 23.71,48.44 23.00,47.00 20.98,52.82 22.48,55.36 23.82,60.99 24.60,64.27 25.46,65.94 22.00,67.00 22.00,67.00 23.00,63.00 23.00,63.00 23.00,63.00 20.00,62.00 20.00,62.00 20.00,62.00 20.00,54.00 20.00,54.00 20.00,54.00 19.00,53.00 19.00,53.00 19.00,53.00 15.00,55.00 15.00,55.00 14.03,50.66 12.79,38.61 18.00,37.00 17.20,34.17 16.69,31.35 17.44,28.42 18.05,26.05 19.60,24.08 20.81,22.00 24.94,14.90 27.38,7.15 36.55,6.91 36.55,6.91 42.73,4.73 42.73,4.73 42.73,4.73 47.00,4.63 47.00,4.63 50.96,5.37 54.35,4.29 57.83,6.56 63.72,10.41 68.84,20.43 71.05,27.00 72.79,32.20 70.70,33.64 75.00,38.00 Z M 76.00,37.00 C 76.00,37.00 76.00,38.00 76.00,38.00 76.00,38.00 75.00,37.00 75.00,37.00 75.00,37.00 76.00,37.00 76.00,37.00 Z M 56.00,40.00 C 56.00,40.00 60.00,41.00 60.00,41.00 60.00,41.00 56.00,40.00 56.00,40.00 Z M 71.00,41.00 C 71.00,41.00 71.00,42.00 71.00,42.00 71.00,42.00 72.00,41.00 72.00,41.00 72.00,41.00 71.00,41.00 71.00,41.00 Z M 42.00,44.00 C 42.00,44.00 42.00,45.00 42.00,45.00 42.00,45.00 41.00,44.00 41.00,44.00 41.00,44.00 42.00,44.00 42.00,44.00 Z M 52.00,45.00 C 52.00,45.00 52.00,46.00 52.00,46.00 52.00,46.00 53.00,45.00 53.00,45.00 53.00,45.00 52.00,45.00 52.00,45.00 Z M 32.00,47.00 C 32.00,47.00 32.00,48.00 32.00,48.00 32.00,48.00 33.00,47.00 33.00,47.00 33.00,47.00 32.00,47.00 32.00,47.00 Z M 69.00,48.00 C 69.00,48.00 68.00,55.00 68.00,55.00 68.00,55.00 69.00,48.00 69.00,48.00 Z M 19.00,54.00 C 19.00,54.00 19.00,55.00 19.00,55.00 19.00,55.00 18.00,54.00 18.00,54.00 18.00,54.00 19.00,54.00 19.00,54.00 Z M 50.00,55.00 C 50.00,55.00 50.00,56.00 50.00,56.00 50.00,56.00 49.00,55.00 49.00,55.00 49.00,55.00 50.00,55.00 50.00,55.00 Z M 51.00,56.00 C 51.00,56.00 51.00,57.00 51.00,57.00 51.00,57.00 50.00,56.00 50.00,56.00 50.00,56.00 51.00,56.00 51.00,56.00 Z M 40.00,60.00 C 46.61,62.34 55.10,58.18 56.00,69.00 49.80,67.49 40.03,68.01 34.00,70.00 34.45,64.32 36.27,64.01 40.00,60.00 Z M 19.00,63.00 C 19.00,63.00 19.00,64.00 19.00,64.00 19.00,64.00 18.00,63.00 18.00,63.00 18.00,63.00 19.00,63.00 19.00,63.00 Z M 73.00,66.20 C 73.00,66.20 66.22,80.00 66.22,80.00 64.82,77.05 63.07,68.32 66.22,66.20 67.54,65.78 71.47,66.06 73.00,66.20 Z M 26.00,67.00 C 26.00,67.00 26.00,68.00 26.00,68.00 26.00,68.00 25.00,67.00 25.00,67.00 25.00,67.00 26.00,67.00 26.00,67.00 Z M 27.00,70.00 C 27.00,70.00 23.00,73.00 23.00,73.00 24.13,70.29 24.13,70.55 27.00,70.00 Z M 47.00,71.00 C 45.80,74.39 45.54,74.47 42.00,74.00 42.00,74.00 42.00,72.00 42.00,72.00 42.00,72.00 47.00,71.00 47.00,71.00 Z M 29.00,74.00 C 29.00,74.00 29.00,75.00 29.00,75.00 29.00,75.00 28.00,74.00 28.00,74.00 28.00,74.00 29.00,74.00 29.00,74.00 Z M 26.00,76.00 C 26.00,76.00 26.00,77.00 26.00,77.00 26.00,77.00 25.00,76.00 25.00,76.00 25.00,76.00 26.00,76.00 26.00,76.00 Z M 49.00,76.00 C 49.00,76.00 53.00,78.00 53.00,78.00 49.42,85.32 42.36,85.75 37.00,80.00 37.00,80.00 42.00,77.00 42.00,77.00 45.44,78.44 45.88,77.86 49.00,76.00 Z";
// }

// function svgdata() {
//   return "M 2655 5955 c -94 -21 -153 -43 -257 -97 c -156 -82 -284 -186 -583 -478 c -370 -361 -459 -431 -630 -495 c -215 -81 -639 -153 -1027 -173 l -133 -7 l -8 -290 c -11 -385 -12 -2409 -1 -2600 l 9 -150 l 160 -17 c 397 -43 740 -122 931 -214 c 118 -56 221 -141 492 -407 c 344 -337 445 -418 626 -502 c 277 -129 533 -122 1052 30 c 324 95 535 152 634 170 c 143 27 511 32 719 10 c 287 -29 653 -99 942 -180 c 68 -19 127 -31 130 -27 c 4 4 9 16 13 27 c 5 18 -11 26 -177 82 c -435 149 -833 248 -1157 289 c -102 12 -178 15 -315 11 c -185 -5 -217 -10 -733 -106 c -410 -76 -681 -67 -863 30 c -252 134 -434 470 -364 668 c 28 79 51 100 179 162 c 164 79 273 109 411 116 c 233 11 356 -48 690 -327 c 197 -165 291 -232 406 -290 c 330 -165 680 -170 1267 -19 c 62 16 115 29 118 29 c 8 0 4 49 -5 54 c -4 3 -64 -2 -132 -11 c -184 -25 -659 -25 -749 0 c -133 35 -310 142 -443 266 c -28 25 -123 127 -213 227 c -349 387 -432 433 -790 434 c -236 0 -336 -29 -639 -186 c -238 -123 -293 -144 -453 -178 c -216 -46 -384 -33 -525 41 c -198 104 -340 335 -316 512 c 23 166 135 304 313 386 c 159 74 425 123 564 106 c 132 -17 221 -55 442 -189 c 208 -126 393 -206 573 -247 c 145 -33 273 -46 557 -55 c 310 -10 467 -25 665 -65 c 348 -70 585 -172 1060 -455 c 480 -287 715 -390 1050 -458 c 190 -40 343 -55 555 -56 l 205 -1 l 123 42 c 68 24 242 96 385 162 c 533 242 709 295 977 294 c 105 -1 153 -5 214 -22 c 109 -29 218 -78 306 -137 c 91 -60 238 -204 309 -301 c 49 -68 53 -71 76 -61 c 14 6 25 14 25 18 c 0 14 -102 176 -154 244 c -150 199 -319 318 -520 367 c -188 45 -341 37 -816 -41 c -489 -82 -515 -84 -815 -85 l -270 0 l -95 34 c -300 106 -516 280 -550 444 c -15 75 9 209 55 304 c 45 91 114 155 232 215 c 210 108 465 159 683 138 c 197 -20 381 -82 640 -217 c 425 -222 516 -266 632 -312 c 273 -108 413 -135 703 -136 c 193 0 233 3 329 23 c 216 46 362 110 717 313 c 386 220 531 284 739 330 c 346 75 891 -13 1722 -278 c 115 -37 210 -64 213 -62 c 2 3 6 15 7 28 c 3 20 -12 29 -132 80 c -375 162 -866 323 -1177 387 c -288 58 -489 68 -689 34 c -187 -32 -298 -70 -655 -226 c -412 -179 -530 -213 -774 -221 c -250 -8 -431 34 -588 136 c -174 115 -242 248 -218 425 c 15 109 55 188 133 262 c 140 134 377 220 705 255 c 91 10 125 9 216 -4 c 147 -22 249 -59 541 -193 c 278 -128 434 -184 575 -208 c 127 -22 205 -20 287 5 c 84 25 271 121 419 213 c 136 86 365 245 365 254 c 0 4 -7 15 -15 26 c -13 17 -19 15 -117 -46 c -233 -146 -455 -258 -588 -299 c -91 -27 -178 -22 -345 21 c -155 40 -275 86 -500 192 c -449 212 -622 270 -900 303 c -375 44 -687 -11 -1020 -178 c -55 -27 -212 -117 -350 -200 c -263 -158 -478 -271 -583 -306 c -91 -31 -230 -49 -452 -60 c -108 -5 -250 -18 -315 -29 c -66 -11 -185 -30 -265 -41 c -383 -56 -632 -155 -1004 -400 c -110 -73 -236 -150 -280 -171 c -147 -70 -280 -91 -456 -71 c -272 32 -457 118 -631 291 c -170 169 -204 357 -103 560 c 122 244 461 414 824 414 c 191 0 289 -26 689 -183 c 423 -167 564 -204 781 -203 c 250 2 474 78 733 251 c 58 39 206 150 329 247 c 123 97 276 211 341 254 c 121 81 291 169 362 189 c 93 25 246 9 410 -45 c 114 -38 312 -134 364 -178 c 41 -35 45 -36 62 -20 c 11 10 19 21 19 25 c 0 14 -195 166 -300 235 c -258 169 -477 240 -665 215 c -212 -29 -374 -116 -710 -382 c -256 -204 -355 -273 -477 -334 c -135 -68 -227 -89 -352 -82 c -126 7 -241 38 -373 103 c -136 65 -231 148 -283 245 c -30 56 -32 66 -26 121 c 29 253 148 453 317 533 c 120 56 202 68 429 62 c 164 -4 248 -13 535 -56 c 430 -63 566 -75 780 -68 c 398 13 675 125 912 368 c 91 94 132 148 211 279 c 58 96 62 106 46 117 c -10 7 -23 13 -29 13 c -6 0 -37 -37 -68 -83 c -206 -303 -443 -467 -743 -512 c -238 -36 -419 -14 -1019 125 c -430 99 -582 120 -855 120 c -196 0 -298 -12 -473 -55 c -301 -75 -612 -258 -897 -530 c -30 -29 -129 -106 -220 -172 c -462 -335 -658 -414 -1070 -433 c -469 -22 -694 -111 -1148 -453 c -343 -259 -498 -335 -722 -353 c -153 -13 -369 30 -517 103 c -175 87 -283 217 -344 413 c -20 63 -24 97 -24 210 c 0 127 2 138 27 186 c 102 193 317 330 598 380 c 124 22 317 19 442 -6 c 126 -26 238 -63 523 -173 c 531 -205 712 -234 947 -152 c 209 73 341 181 640 525 c 181 208 283 295 444 373 c 132 65 178 72 469 71 c 198 -1 293 -6 400 -21 c 77 -11 140 -19 141 -19 c 1 1 4 13 8 28 c 6 26 4 28 -61 47 c -247 74 -531 128 -713 137 c -188 10 -420 -40 -593 -127 c -125 -64 -230 -140 -472 -343 c -82 -70 -188 -152 -235 -184 c -277 -188 -530 -187 -876 6 c -77 43 -87 52 -112 102 c -108 219 115 630 423 780 c 103 50 182 69 325 76 c 149 8 275 -9 652 -86 c 386 -80 459 -90 643 -90 c 267 0 573 55 1005 180 c 207 60 576 184 593 200 c 4 4 5 18 2 32 l -6 25 l -82 -24 c -499 -147 -1095 -237 -1437 -218 c -241 13 -360 40 -810 187 c -287 93 -400 124 -530 143 c -116 18 -304 18 -385 0 Z";
// }

function svgdata() {
  return "M18.61,54.89C15.7,28.8,30.94,10.45,59.52,0C42.02,22.71,74.44,47.31,76.23,70.89 c4.19-7.15,6.57-16.69,7.04-29.45c21.43,33.62,3.66,88.57-43.5,80.67c-4.33-0.72-8.5-2.09-12.3-4.13C10.27,108.8,0,88.79,0,69.68 C0,57.5,5.21,46.63,11.95,37.99C12.85,46.45,14.77,52.76,18.61,54.89L18.61,54.89z";
}
const isScoring = (el) => {
  const msgBox = document.getElementById("message");
  const score = document.getElementById("label");
  if (el.includes("false") === false) {
    // console.log('Ok');
    counterItRight++;
    // console.log(counterItRight);

    score.textContent = `SCORE: ${counterItRight}`;
    timer = timer / 2;
    b = timer; // Update the timer flip flop(what a mess...)
    // Display MSG ("Congrats, click to continue")
    msgBox.textContent = "Congratulation. Click & Try to do it again!";
    console.log("Novo Timer:", timer);
    return true;
  }

  lives--;
  for (let i = 5; i > lives; i--) {
    document.getElementById(`life${i - 1}`).style.visibility = "hidden";
  }
  // Display MSG ("Not this time. Click to move on")
  msgBox.textContent = "Ops :( Try to Get it Right in B&W!";
  console.log(`Lives: ${lives}`);
  // Check if it is the end of the game and restart.
  if (lives == 0) {
    // RESET VARIABLES FOR THE GAME
    lives = 5;
    counterItRight = 0;
    timer = 1000;
    b = timer;
    // RESET VISUAL STATE:
    score.textContent = `SCORE: ${counterItRight}`;
    for (let i = 5; i > 0; i--) {
      document.getElementById(`life${i - 1}`).style.visibility = "visible";
    }
  }
  return false;
};

const isHidden = (el) => {
  let style = window.getComputedStyle(el);
  // console.log((style.display === 'none') || (style.visibility === 'hidden'));
  return style.display === "none" || style.visibility === "hidden";
};
// Get all elements on the page (change this to another DOM element if you want)

const get_state = () => {
  const bg1 = document.getElementById("background1");
  const bg2 = document.getElementById("background2");
  const bg3 = document.getElementById("background3");
  const bg4 = document.getElementById("background4");
  const all = [bg1, bg2, bg3, bg4];
  let current_visible = [];
  for (let i = 0, max = all.length; i < max; i++) {
    if (!isHidden(all[i])) {
      // console.log(all[i].getAttribute('isRight'), all[i].style.visibility);
      current_visible.push(all[i].getAttribute("isRight"));
    }
  }
  // console.log("Current:", current_visible);
  return current_visible;
};

const score = createSVGElement("g");

const rect = createSVGElement("rect");

rect.setAttribute("fill", "black");
rect.setAttribute("opacity", 0.75);
rect.setAttribute("x", 5);
rect.setAttribute("y", 5);
rect.setAttribute("width", 200);
rect.setAttribute("height", 100);

const label = createSVGElement("text");
label.setAttribute("color", "white");
label.setAttribute("id", "label");
label.setAttribute("fill", "white");
label.setAttribute("background", "red");
label.setAttribute("x", "10");
label.setAttribute("y", "40");
label.setAttribute("font-size", "3vw");
label.appendChild(document.createTextNode(`SCORE: ${counterItRight}`));

const lives_group = createSVGElement("g");
lives_group.setAttribute("transform", "scale(.4)");
lives_group.setAttribute("id", "lives");
for (let i = 0; i < lives; i++) {
  const life = createSVGElement("path");
  life.setAttribute("d", svgdata());
  life.setAttribute("class", "life");
  life.setAttribute("fill", "white");
  life.setAttribute("id", `life${i}`);
  life.setAttribute("transform", `translate(${i * 100 + 15} 0)`);
  lives_group.appendChild(life);
}
score.appendChild(rect);
score.appendChild(label);
score.appendChild(lives_group);

const createMSG = (msg) => {
  const posX = width / 2 - 300;
  const posY = height / 2 - 100;
  const msg_group = createSVGElement("g");

  msg_group.setAttribute("transform-origin", "0 0");
  const rect = createSVGElement("rect");

  rect.setAttribute("fill", "black");
  rect.setAttribute("opacity", 0.85);
  rect.setAttribute("x", posX);
  rect.setAttribute("y", posY);
  rect.setAttribute("width", 550);
  rect.setAttribute("height", 100);

  const label = createSVGElement("text");
  label.setAttribute("color", "white");
  label.setAttribute("id", "message");
  label.setAttribute("fill", "white");
  label.setAttribute("x", posX + 40);
  label.setAttribute("y", posY + 50);
  label.setAttribute("font-size", "3vw");
  label.appendChild(document.createTextNode(`${msg}`));
  msg_group.appendChild(rect);
  msg_group.appendChild(label);
  return msg_group;
};
// const width = window.innerWidth;
// const height = window.innerHeight;

const mask = createSVGElement("mask");
mask.setAttribute("id", "curran-mask");
mask.setAttribute("class", "curran grow");

const maskRect = createSVGElement("rect");
maskRect.setAttribute("width", width);
maskRect.setAttribute("height", height);
maskRect.setAttribute("fill", "black");
mask.appendChild(maskRect);

const curran = createSVGElement("path");
curran.setAttribute("d", svgdata());
curran.setAttribute(
  "transform",
  `translate(${width / 4}, 0), scale(${scaleFactor})`
);
curran.setAttribute("fill", "white");
curran.setAttribute("class", "curran grow");
curran.setAttribute("id", "curran-white-mask");
mask.appendChild(curran);

const mask2 = createSVGElement("mask");
mask2.setAttribute("id", "curran-mask-2");
mask2.setAttribute("class", "curran grow");

const maskRect2 = createSVGElement("rect");
maskRect2.setAttribute("width", width);
maskRect2.setAttribute("height", height);
maskRect2.setAttribute("fill", "white");
mask2.appendChild(maskRect2);

const curran2 = createSVGElement("path");
curran2.setAttribute("d", svgdata());

curran2.setAttribute(
  "transform",
  `translate(${width / 4}, 0), scale(${scaleFactor})`
);
curran2.setAttribute("class", "curran grow");
curran2.setAttribute("id", "curran-black-mask");
curran2.setAttribute("fill", "black");
mask2.appendChild(curran2);

// Pallet of colors: https://nl.pinterest.com/pin/519673244480316946/
const colors = [
  "#7E7DD6",
  "#F47D57",
  "#89CE56",
  "#FDF868",
  "#D94151",
  "#CFD3D6",
  "#318CEC",
  "#7BC641",
  "#D02A3C",
];

const background1 = createSVGElement("g");
background1.setAttribute("id", "background1");
background1.setAttribute("class", "background bgs");
background1.setAttribute("isRight", true);
const n = 100;
for (let i = 0; i < n; i++) {
  const rect = createSVGElement("rect");
  rect.setAttribute("y", i * 20);
  rect.setAttribute("width", width);
  rect.setAttribute("height", 10);
  rect.setAttribute("class", "group1");
  rect.setAttribute("mask", "url(#curran-mask)");
  background1.appendChild(rect);
}

const background2 = createSVGElement("g");
background2.setAttribute("isRight", false);
background2.setAttribute("id", "background2");
background2.setAttribute("class", "background bgs");
for (let i = 0; i < n; i++) {
  const rect = createSVGElement("rect");
  rect.setAttribute("x", i * 20);
  rect.setAttribute("width", 20);
  rect.setAttribute("height", height);
  rect.setAttribute("class", "background group1");
  rect.setAttribute("fill", colors[(i + 1) % colors.length]);
  rect.setAttribute("mask", "url(#curran-mask-2)");
  background2.appendChild(rect);
}

const background3 = createSVGElement("g");
background3.setAttribute("isRight", false);
background3.setAttribute("id", "background3");
background3.setAttribute("class", "background bgs");
for (let i = 0; i < n; i++) {
  const rect = createSVGElement("rect");
  rect.setAttribute("y", i * 20);
  rect.setAttribute("width", width);
  rect.setAttribute("height", 20);
  rect.setAttribute("class", "background group2");
  rect.setAttribute("fill", colors[(i + 1) % colors.length]);
  // rect.setAttribute('visibility','hidden');
  rect.setAttribute("mask", "url(#curran-mask)");
  background3.appendChild(rect);
}
background3.setAttribute("visibility", "hidden");

const background4 = createSVGElement("g");
background4.setAttribute("isRight", true);
background4.setAttribute("id", "background4");
background4.setAttribute("class", "background bgs");
for (let i = 0; i < n; i++) {
  const rect = createSVGElement("rect");
  rect.setAttribute("x", i * 20);
  rect.setAttribute("width", 10);
  rect.setAttribute("height", height);
  rect.setAttribute("class", "group2");
  rect.setAttribute("mask", "url(#curran-mask-2)");
  background4.appendChild(rect);
}
background4.setAttribute("visibility", "hidden");

const mouseMove = (ev) => {
  document.getElementById("curran-black-mask").style.transform =
    "translateY(" + (ev.clientY - 80) + "px)";
  document.getElementById("curran-black-mask").style.transform +=
    "translateX(" + (ev.clientX - 100) + "px)";
  document.getElementById(
    "curran-black-mask"
  ).style.transform += `scale(${scaleFactor})`;

  document.getElementById("curran-white-mask").style.transform =
    "translateY(" + (ev.clientY - 80) + "px)";
  document.getElementById("curran-white-mask").style.transform +=
    "translateX(" + (ev.clientX - 100) + "px)";
  document.getElementById(
    "curran-white-mask"
  ).style.transform += `scale(${scaleFactor})`;
};

const mouseClick = (ev) => {
  // swap values: a, b = b, a

  a = a + b;
  b = a - b;
  a = a - b;

  if (a == 0) {
    window.clearInterval(myInterval);
    // TODO: Verify if You Got It Right In Black And White
    const state = get_state();
    msg.style.visibility = "visible";
    isScoring(state);
  } else {
    console.log("New Timer a:", a);
    myInterval = window.setInterval(randomize, a);
    msg.style.visibility = "hidden";
  }
  // THIS IS NOT WORKING... I DON'T KNOW WHY!
  // document.getElementById('curran-white-mask').style.transform = `rotate(1080deg) scale(${scaleFactor}) translateY(${ev.ClientY}) translateX(${ev.ClientX})`;
  // document.getElementById('curran-black-mask').style.transform = `rotate(1080deg) scale(${scaleFactor})  translateY(${ev.ClientY}) translateX(${ev.ClientX})`;

  // // I just wanted to give you a spinning face... I was not able...

  //         	document.getElementById('curran-black-mask').style.transform = "rotate(9000deg)";
  //         document.getElementById('curran-black-mask').style.transform += 'scale(${scaleFactor})';
  //           document.getElementById('curran-white-mask').style.transform = "rotate(9000deg)";
  //         document.getElementById('curran-white-mask').style.transform += 'scale(${scaleFactor})';
};

const randomize = () => {
  const bg1 = document.getElementById("background1");
  const bg2 = document.getElementById("background2");
  const bg3 = document.getElementById("background3");
  const bg4 = document.getElementById("background4");
  const last_state = [
    bg1.style.visibility,
    bg2.style.visibility,
    bg3.style.visibility,
    bg4.style.visibility,
  ];
  let new_state = [
    bg1.style.visibility,
    bg2.style.visibility,
    bg3.style.visibility,
    bg4.style.visibility,
  ];
  do {
    // Trying to avoid pattern repetition and blank screen:
    bg1.style.visibility = status[Math.round(Math.random())];
    bg2.style.visibility = status[Math.round(Math.random())];
    bg3.style.visibility = status[Math.round(Math.random())];
    bg4.style.visibility = status[Math.round(Math.random())];

    // avoid blank screen:
    const bgs = [bg1, bg2, bg3, bg4];

    if (
      (bg1.style.visibility === bg2.style.visibility) &
      (bg3.style.visibility === bg4.style.visibility)
    ) {
      if (
        (bg1.style.visibility === bg3.style.visibility) &
        (bg3.style.visibility === "hidden")
      )
        bgs[Math.floor(Math.random() * bgs.length)].style.visibility =
          "visible";
    }
    new_state = [
      bg1.style.visibility,
      bg2.style.visibility,
      bg3.style.visibility,
      bg4.style.visibility,
    ];
  } while (new_state === last_state);
};
