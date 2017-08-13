console.log('Loaded!');

var img = document.getElementById('image');
function moveRight(){
    marginLeft = marginLeft+5;
}

img.onclick = function(){
    var interval = setInterval(moveRight, 50);
};