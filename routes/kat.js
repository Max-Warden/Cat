const pics = [
    'url("/images/1.png")',
    'url("2.jpg")',
];

const pic = document.querySelector('selection');

function showImage() {
    var a = math.floor(Math.random()*pic.length);
    console.log(a);
    var img = pics[a];
    console.log(img);
    pic.style.backgroundImage = img;
}