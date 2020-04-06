
var images = [
    "include/LLULabsWNote.png",
    "include/LLUManage.png",
    "include/LLUSub.png",
    "include/LLUCurrReq.png",
    "include/LLUStudent.png",
    "include/LLUContact.png"
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