
var images = [
    "include/IMG_0169.PNG",
    "include/IMG_0197.PNG",
    "include/IMG_0171.PNG",
    "include/IMG_0198.PNG",
    "include/IMG_0204.PNG",
    "include/IMG_0200.PNG",
    "include/IMG_0201.PNG",
    "include/IMG_0202.PNG"
];

var i = -1;
var img = images[i];

function nextImg() {
    i += 1
    i %= images.length
    img = document.getElementById("pics")
    img.src=images[i]
    
};

function lastImg() {
    i -= 1
    if (i < 0) {
        i = images.length - 1
    }
    img = document.getElementById("pics")
    img.src=images[i]
};