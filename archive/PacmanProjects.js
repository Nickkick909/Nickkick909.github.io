var videos = [
    "/include/PacmanBFS_Trim.mp4",
    "/include/PacmanMultiAgent_Trim.mp4",
    "/include/PacmanSearchAllDots.mp4"
];

var i = -1;
var vid = videos[i];

function nextVid() {
    i += 1
    i %= videos.length
    vid = document.getElementById("vids")
    vid.src=videos[i]
    
};

function lastVid() {
    i -= 1
    if (i < 0) {
        i = videos.length - 1
    }
    vid = document.getElementById("vids")
    vid.src=videos[i]
};