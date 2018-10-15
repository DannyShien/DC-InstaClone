// ==== ==== InstaClone ==== ====
const IMAGES = [
   {pics:"images/clear-sky.jpg", alt: " "},
   {pics:"images/clear-sky2.jpg", alt: " "},
   {pics:"images/in-the-clouds.jpg", alt: " "},
   {pics:"images/in-the-sky.jpg", alt: " "},
   {pics:"images/lightning-clouds.jpg", alt: " "},
   {pics:"images/mountain-view-clouds.jpg", alt: " "},
   {pics:"images/ocean-sunset.jpg", alt: " "},
   {pics:"images/over-cloud-sunset.jpg", alt: " "},
   {pics:"images/pink-clouds.jpg", alt: " "},
   {pics:"images/stormy-clouds.jpg", alt: " "},
   {pics:"images/stormy-clouds2.jpg", alt: " "},
];

// Alternative version if you're using images on the hard drive.
// Make sure to copy the images to an "images" folder in your project
// const IMAGE = [

// ];
const thumbnailContainer = document.querySelector('[data-container]');
const outputElement = document.querySelector('[data-output]');

// function that generates  an img element
function createImage(imageInfo) {
    const theImage = document.createElement('img');

    // theImage.src = imageInfo;
    theImage.setAttribute('src', imageInfo.pics); 
    theImage.setAttribute('alt', imageInfo.alt);

    // add an evenListener to the image
    theImage.addEventListener('click', function (event) {
        console.log('image clicked');
        // the element that got clicked is accessible
        // as `event.target`
        // And, I can read the `src` attribute!
        console.log(event.target.src);
        
        // I can now set the output image's src
        // to event.target.src!
        outputElement.setAttribute('src', event.target.src);
    });

    return theImage;
}

// function that generates the thumbnail div
function createThumbnail(imageInfo) {
    const theContainer = document.createElement('div');
    theContainer.classList.add('thumbnail-item');

    const image = createImage(imageInfo);
    theContainer.appendChild(image);

    return theContainer;
}

// just draw a thumbnail to the body
// so we can test the clicky mc-clickerOnAbility
// let firstImageFile = IMAGES[0];

// Loop through the IMAGES array.
// For each image, call the anoymous function. 
// For anon func should except to rceive an image
IMAGES.forEach(function (anImageInfo) {
    // We pass the image to our createThumbnail func. 
    let thumbnail = createThumbnail(anImageInfo);

    // then append that thumbnail to the page. 
    thumbnailContainer.appendChild(thumbnail);
}); 