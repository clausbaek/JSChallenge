const images = ["0.jpg", "1.jpg", "2.jpg","3.jpg","4.jpg","5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

let bgImage = document.createElement("img");
const DEFAULT_1k= 500;
bgHeight = DEFAULT_1k;

bgImage.src = `img/${chosenImage}`;
bgImage.height = bgHeight;
document.body.appendChild(bgImage)  