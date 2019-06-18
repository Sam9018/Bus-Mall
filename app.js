'use strict';

var previousSetOfImages = [];


function ImageAnalytics(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  ImageAnalytics.imageDatabase.push(this);
}

ImageAnalytics.imageDatabase = [];

//CHANGE FILE PATH
new ImageAnalytics('R2D2 Bag', 'images/bag.jpg', 0, 0);
new ImageAnalytics('Banana Slicer', 'images/banana.jpg', 0, 0);
new ImageAnalytics('Bathroom Screen', './images/bathroom.jpg', 0, 0);
new ImageAnalytics('Yellow Boots', './images/boots.jpg', 0, 0);
new ImageAnalytics('Breakfast Toaster', './images/breakfast.jpg', 0, 0);
new ImageAnalytics('Delicious Meatball Gum, Yum!', './images/bubblegum.jpg', 0, 0);
new ImageAnalytics('Gorgeous Red Chair', './images/chair.jpg', 0, 0);
new ImageAnalytics('Cthulhu Eats a Guy!', './images/cthulhu.jpg', 0, 0);
new ImageAnalytics('Duck Dog Muzzle', './images/dog-duck.jpg', 0, 0);
new ImageAnalytics('YUMMY dragon meat', './images/dragon.jpg', 0, 0);
new ImageAnalytics('Office Cutlery', './images/pen.jpg', 0, 0);
new ImageAnalytics('Doggie Housework Helper', './images/pet-sweep.jpg', 0, 0);
new ImageAnalytics('Pizza Slicer', './images/scissors.jpg', 0, 0);
new ImageAnalytics('Sleep With the Fishes', './images/shark.jpg', 0, 0);
new ImageAnalytics('Put Baby to WORK', './images/sweep.png', 0, 0);
new ImageAnalytics('Smells Worse Inside', './images/tauntaun.jpg', 0, 0);
new ImageAnalytics('You\'re a Monster if You Eat This', './images/unicorn.jpg', 0, 0);
new ImageAnalytics('Slither', './images/usb.gif', 0, 0);
new ImageAnalytics('Not Useless at ALL', './images/water-can.jpg', 0, 0);
new ImageAnalytics('Stylish', './images/wine-glass.jpg', 0, 0);

console.log(ImageAnalytics.imageDatabase);

var imageContainer = document.getElementById(images);
imageContainer.addEventListener('click', handleClick);



function getRandomNumber() {
  return Math.floor(Math.random()*ImageAnalytics.imageDatabase.length);
}

function handleClick(event) {
  console.log(event.target.id);
  for(var i=0; i<ImageAnalytics.imageDatabase.length; i++) {
    if (ImageAnalytics.imageDatabase[i].name === event.target.alt) {
      ImageAnalytics.imageDatabase[i].clicked++;
      break;
    }
  }
  getRandomImage();
}





function getRandomImage() {

  var images = ('img1', 'img2', 'img3');
  
  for (var i = 0; i < images.length; i++) {
    var image = document.getElementById(images[1]);
    var randomNumber = getRandomNumber();
    image.src = ImageAnalytics.imageDatabase(randomNumber).filepath;
    image.alt = ImageAnalytics.imageDatabase(randomNumber).name;
    randomArray.push(ImageAnalytics.imageDatabase[getRandomNumber()].filepath);
  }
}

getRandomImage();

var left = document.getElementById('img1');
var center = document.getElementById('img2');
var right = document.getElementById('img3');




// var imagesArray = [
//   './images/bag.jpg',
//   './images/banana.jpg',
//   './images/bathroom.jpg',
//   './images/boots.jpg',
//   './images/breakfast.jpg',
//   './images/bubblegum.jpg',
//   './images/chair.jpg',
//   './images/cthulhu.jpg',
//   './images/dog-duck.jpg',
//   './images/dragon.jpg',
//   './images/pen.jpg',
//   './images/pet-sweep.jpg',
//   './images/scissors.jpg',
//   './images/shark.jpg',
//   './images/sweep.png',
//   './images/tauntaun.jpg',
//   './images/unicorn.jpg',
//   './images/usb.gif',
//   './images/water-can.jpg',
//   './images/wine-glass.jpg',
// ];