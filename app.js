const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
];

const onMove = (event) => {
  ctx.beginPath();
  ctx.moveTo(clickX, clickY);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
};

const onClick = (event) => {
  clickX = event.layerX;
  clickY = event.layerY;
};

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("click", onClick);
