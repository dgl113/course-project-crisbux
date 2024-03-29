"use strict";

// Cristian Betancourt

// CAROUSEL

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
setInterval(autoChangeImage, 5000);


// VERSES

const verses = [
    {
        text: "Then they who are alive, shall be caught up together into the clouds with them who remain, to meet the Lord in the air; and so shall we be ever with the Lord.",
        reference: "1 Thessalonians 4:17"
    },
    {
        text: "For God so loved the world, that he gave his only Son, \n that whoever believes in him should not perish but have eternal life.",
        reference: "John 3:16"
    },
    {
        text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
        reference: "Joshua 1:9"
    }
];

let currentVerseIndex = 0;
const verseElement = document.getElementById('verse');
const referenceElement = document.getElementById('reference');

function showVerse(index) {
    verseElement.style.opacity = 0;
    setTimeout(() => {
        verseElement.textContent = verses[index].text;
        referenceElement.textContent = verses[index].reference;
        verseElement.style.opacity = 1;
    }, 1000);
}

function showNextVerse() {
    currentVerseIndex = (currentVerseIndex + 1) % verses.length;
    showVerse(currentVerseIndex);
}

function showPreviousVerse() {
    currentVerseIndex = (currentVerseIndex - 1 + verses.length) % verses.length;
    showVerse(currentVerseIndex);
}

// Change verses 
setInterval(showNextVerse, 5000);
showVerse(currentVerseIndex);


//BODY ANIMATION