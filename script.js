import CanvasNest from "canvas-nest.js";

let count = Math.floor(Math.random() * 101) + 50;
let color = `
${Math.floor(Math.random() * 56) + 200},
${Math.floor(Math.random() * 56) + 200},
${Math.floor(Math.random() * 56) + 200}
`;
console.log(color);
console.log(Math.floor(Math.random() * 56) + 200);
let opacity = Math.floor(Math.random() * 11) / 10;

const config = {
  color: color,
  opacity: opacity,
  zIndex: -2,
  count: count,
};

// Using config rendering effect at 'element'.
const element = document.querySelector("body");
const cn = new CanvasNest(element, config);

// destroy
cn.destroy();
