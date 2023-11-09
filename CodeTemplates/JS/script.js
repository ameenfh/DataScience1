// JavaScript source code

window.addEventListener('scroll', function() {
    var image = document.getElementById('picture');
    var currentScrollPos = window.scrollY;

    if (currentScrollPos > 1000) {
        image.src = 'rick.jpg';
        }
    else if (currentScrollPos < 1000){
        image.src = 'mars.jpg';
    }
});