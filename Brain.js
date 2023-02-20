var images = [
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/1.jpeg', alt: 'Image 1' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/2.jpeg', alt: 'Image 2' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/3.jpeg', alt: 'Image 3' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/4.jpeg', alt: 'Image 4' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/5.jpeg', alt: 'Image 5' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/6.jpeg', alt: 'Image 6' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/7.jpeg', alt: 'Image 7' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/8.jpeg', alt: 'Image 8' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/9.jpeg', alt: 'Image 9' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/10.jpeg', alt: 'Image 10' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/11.jpeg', alt: 'Image 11' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/12.jpeg', alt: 'Image 12' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/13.jpeg', alt: 'Image 13' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/14.jpeg', alt: 'Image 14' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/15.jpeg', alt: 'Image 15' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/16.jpeg', alt: 'Image 16' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/17.jpeg', alt: 'Image 17' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/18.jpeg', alt: 'Image 18' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/19.jpeg', alt: 'Image 19' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/20.jpeg', alt: 'Image 20' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/21.jpeg', alt: 'Image 21' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/22.jpeg', alt: 'Image 22' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/23.jpeg', alt: 'Image 23' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/24.jpeg', alt: 'Image 24' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/25.jpeg', alt: 'Image 25' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/26.jpeg', alt: 'Image 26' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/27.jpeg', alt: 'Image 27' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/28.jpeg', alt: 'Image 28' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/29.jpeg', alt: 'Image 29' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/30.jpeg', alt: 'Image 30' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/31.jpeg', alt: 'Image 31' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/32.jpeg', alt: 'Image 32' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/33.jpeg', alt: 'Image 33' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/34.jpeg', alt: 'Image 34' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/35.jpeg', alt: 'Image 35' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/36.jpeg', alt: 'Image 36' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/37.jpeg', alt: 'Image 37' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/38.jpeg', alt: 'Image 38' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/39.jpeg', alt: 'Image 39' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/40.jpeg', alt: 'Image 40' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/41.jpeg', alt: 'Image 41' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/42.jpeg', alt: 'Image 42' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/43.jpeg', alt: 'Image 43' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/44.jpeg', alt: 'Image 44' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/45.jpeg', alt: 'Image 45' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/46.jpeg', alt: 'Image 46' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/47.jpeg', alt: 'Image 47' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/48.jpeg', alt: 'Image 48' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/49.jpeg', alt: 'Image 49' },
    { src: 'file:///C:/Users/leona/Desktop/WInf/Quotes/50.jpeg', alt: 'Image 50' },
];

// creating function to generate a random number between 0-49 & returning the respective image
function RandomImage() {
    var RandomNumber = Math.floor((Math.random() * 50));
    return images[RandomNumber];
}

// attach an event listener to "button-randomizer"
document.getElementById("button-randomizer").addEventListener("click", function () {
    // assign generated image properties to variable
    var GeneratedImage = RandomImage();
    // create img html element
    var DisplayImage = document.createElement("img");
    // assign image properties to html element to display
    DisplayImage.src = GeneratedImage.src;
    DisplayImage.alt = GeneratedImage.alt;
    // assinging html element to variable
    var ImageContainer = document.getElementById("image-container");
    // check for child element in image container
    if (ImageContainer.firstChild) {
        // remove child element if existing
        ImageContainer.removeChild(ImageContainer.firstChild);
    }
    // display generated image as child element in image-container
    ImageContainer.appendChild(DisplayImage);
});

// note: add event listener to "button-download"
document.getElementById("button-download").addEventListener("click", function() {
    // note: create html element a
    var save = document.createElement("a");
    // note: naming the download and setting the file format
   save.download = "Enlightenment.jpg";
    // note: source of element to download 
    save.href = "data:image/jpeg;base64,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"
    // note: clicking on save
    save.click();
    });