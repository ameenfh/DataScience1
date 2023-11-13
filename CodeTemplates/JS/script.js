// JavaScript source code

window.addEventListener('scroll', function() {
    var image = document.getElementById('picture');
    var scrollPos = window.scrollY;

    if (scrollPos > 1000 && scrollPos <= 2000) {
        image.src = 'second.png';
        }
    else if (scrollPos < 1000){
        image.src = 'mars.png';
    }
    else if (scrollPos > 2000){
        image.src = 'third.png';
    }
});