const images = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

// const body = document.querySelector("body");

// function paintImage(imgNum) {
//   const images = new Image();
//   images.src = `img/${imgNum + 1}.jpg`;
//   images.classList.add("bgImage");
//   body.appendChild(images);
// }

// function randomImage() {
//   const chosenImage = images[Math.floor(Math.random() * images.length)];
//   return chosenImage;
// }

// function init() {
//   const randomNum = randomImage();
//   paintImage(randomNum);
// }

// init();
