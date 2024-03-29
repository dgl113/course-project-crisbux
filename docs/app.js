"use strict";

// Cristian Betancourt

// Carousel

// Variable Hero
const heroContainer = document.querySelector(".hero");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Array URL images
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

let currentImageIndex = 0;

// Function Carousel

function changeImage() {
  // Background change
  heroContainer.style.backgroundImage = `url(images/${images[currentImageIndex]})`;
}

function showPreviousImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  changeImage();
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  changeImage();
}

prevBtn.addEventListener("click", showPreviousImage);
nextBtn.addEventListener("click", showNextImage);

// Call funtion
changeImage();

// Interval changer
function autoChangeImage() {
    showNextImage();
}
setInterval(autoChangeImage, 4000);
