'use strict';

var maxClicksAllowed = 25;
var clicksThisSession = 0;
var previousSetOfImages = [];

function ImageAnalytics(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.displayed = 0;
  this.clicked = 0;
  ImageAnalytics.imageDatabase.push(this);
}
ImageAnalytics.imageDatabase = [];

new ImageAnalytics('R2D2 Bag', 'images/bag.jpg');
new ImageAnalytics('Banana Slicer', 'images/banana.jpg');
new ImageAnalytics('Bathroom Screen', './images/bathroom.jpg');
new ImageAnalytics('Yellow Boots', './images/boots.jpg');
new ImageAnalytics('Breakfast Toaster', './images/breakfast.jpg');
new ImageAnalytics('Delicious Meatball Gum, Yum!', './images/bubblegum.jpg');
new ImageAnalytics('Gorgeous Red Chair', './images/chair.jpg');
new ImageAnalytics('Cthulhu Eats a Guy!', './images/cthulhu.jpg');
new ImageAnalytics('Duck Dog Muzzle', './images/dog-duck.jpg');
new ImageAnalytics('YUMMY dragon meat', './images/dragon.jpg');
new ImageAnalytics('Office Cutlery', './images/pen.jpg');
new ImageAnalytics('Doggie Housework Helper', './images/pet-sweep.jpg');
new ImageAnalytics('Pizza Slicer', './images/scissors.jpg');
new ImageAnalytics('Sleep With the Fishes', './images/shark.jpg');
new ImageAnalytics('Put Baby to WORK', './images/sweep.png');
new ImageAnalytics('Smells Worse Inside', './images/tauntaun.jpg');
new ImageAnalytics('You\'re a Monster if You Eat This', './images/unicorn.jpg');
new ImageAnalytics('Slither', './images/usb.gif');
new ImageAnalytics('Not Useless at ALL', './images/water-can.jpg');
new ImageAnalytics('Stylish', './images/wine-glass.jpg');


function setupListeners() {
  var imageContainer = document.getElementById('images');
  imageContainer.addEventListener('click', handleClick);
}

function removeListeners() {
  var imageContainer = document.getElementById('images');
  imageContainer.removeEventListener('click', handleClick);
}

function getRandomNumber() {
  return Math.floor(Math.random() * ImageAnalytics.imageDatabase.length);
}

function handleClick(event) {
  // console.log('i got here');
  for (var i = 0; i < ImageAnalytics.imageDatabase.length; i++) {
    if (ImageAnalytics.imageDatabase[i].name === event.target.alt) {
      // console.log(event.target.alt, 'event.target.alt');
      ImageAnalytics.imageDatabase[i].clicked++;
      clicksThisSession++;
      // console.log(clicksThisSession);
      if (clicksThisSession === maxClicksAllowed) {
        // console.log('insideInnerIf');
        removeListeners();
        createChart();
      }
      break;
    }
  }
  getRandomImages();
}

function getRandomImages() {

  // The list of image ids from the DOM
  var images = ['img1', 'img2', 'img3'];

  // start with empty containers
  var currentSetOfImages = [];

  // Repeat on each container
  for (var i = 0; i < images.length; i++) {

    // Find it in the DOM
    var image = document.getElementById(images[i]);

    // Check if false
    var ok = false;

    // Run until unique image shown
    while (ok === false) {

      // Get a random number between 0 and the number of images
      var randomNumber = getRandomNumber();

      // If not from previous set and not on screen
      if (!previousSetOfImages.includes(randomNumber) && !currentSetOfImages.includes(randomNumber)) {

        // Update it's displayed count
        ImageAnalytics.imageDatabase[randomNumber].displayed++;

        // Render it
        image.src = ImageAnalytics.imageDatabase[randomNumber].filepath;
        image.alt = ImageAnalytics.imageDatabase[randomNumber].name;

        // Add it to my list of seen images
        currentSetOfImages.push(randomNumber);

        // Bug out
        ok = true;
      }

    }
  }

  previousSetOfImages = currentSetOfImages;

}

setupListeners();
getRandomImages();







var ctx = document.getElementById('chart').getContext('2d');

function createChart() {
  var labels = [];
  var displayedTimes = [];
  var clickedTimes = [];
  var colors = [];

  for (var i = 0; i < ImageAnalytics.imageDatabase.length; i++) {
    labels.push(ImageAnalytics.imageDatabase[i].name);
    displayedTimes.push(ImageAnalytics.imageDatabase[i].displayed);
    clickedTimes.push(ImageAnalytics.imageDatabase[i].clicked)
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colors.push(randomColor);
  }


  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Number of times displayed',
          data: displayedTimes,
          backgroundColor: '#ff0000',
        },
        {
          label: 'Number of times clicked',
          data: clickedTimes,
          backgroundColor: colors,
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });

}

