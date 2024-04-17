// Windy Day Asgn Start

// Set up canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Global Variables
let cloudImg = document.getElementById("cloud");

let cloud1x = 130;
let cloud1y = 120;
let cloud2x = 170;
let cloud2y = 100;

// Animation Loop
requestAnimationFrame(animate);

function animate() {
  // UPDATE
  // Animate cloud 1
  cloud1x++; // Move left, positive = move right
  cloud2x++;

  // If cloud goes off left side of canvas, teleport to right side at random height
  if (cloud1x - 100 > 400) {
    //if cloud goes below 0,
    cloud1x = -100;
    cloud1y = Math.random() * 200;
  }

  if (cloud2x - 100 > 400) {
    cloud2x = -100;
    cloud2y = Math.random() * 200;
  }

  // DRAW
  // Blue Background
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 400, 400);

  // Green Grass
  ctx.fillStyle = "green";
  ctx.fillRect(0, 300, 400, 100);

  // Draw Clouds
  ctx.drawImage(cloudImg, cloud1x, cloud1y); // Cloud 1
  ctx.drawImage(cloudImg, cloud2x, cloud2y); // Cloud 2

  // LOOP
  requestAnimationFrame(animate);
}
