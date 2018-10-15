// ==== ==== InstaClone ==== ====
const IMAGE = [
   "images/clear-sky.jpg",
   "images/clear-sky2.jpg",
   "images/in-the-clouds.jpg",
   "images/in-the-sky.jpg",
   "images/lightning-clouds.jpg",
   "images/mountain-view-clouds.jpg",
   "images/ocean-sunset.jpg",
   "images/over-cloud-sunset.jpg",
   "images/pink-clouds.jpg",
   "images/stormy-clouds.jpg",
   "images/stormy-clouds2.jpg",
];

// Alternative version if you're using images on the hard drive.
// Make sure to copy the images to an "images" folder in your project
// const IMAGE = [

// ];

// function that generates  an img element
function createImage(image) {
    const theImage = document.createElement('img');

    // theImage.src = imageFile;
    theImage.setAttribute('src', imageFile); 

    // add an evenListener to the image
    theImage.addEventListener('click', function (event) {
        console.log('Clicked image');
        // the element that got clicked is accessible
        // as `event.target`
        // And, I can read the `src` attribute!
        console.log(event.target.src);
        // I can now set the output image's src
        // to event.target.src!
    });

    return theImage;
}

// function that generates the thumbnail div
function createThumbnail(imageFile) {
    const theContainer = document.createElement('div');
    theContainer.classList.add('thumbnail-item');

    const image = createImage(imageFile);
    theContainer.appendChild(image);

    return theContainer;
}

// just draw a thumbnail to the body
// so we can test the clicky mc clickerOnAbility

let firstImageFile = IMAGES[0];
let testThumb = createThumbnail(firstImageFile);
document.body.appendChild(testThumb);