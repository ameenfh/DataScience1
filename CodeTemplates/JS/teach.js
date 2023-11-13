// JavaScript source code
window.addEventListener('scroll', function() {
    var image = document.getElementById('picture');

    if (window.scrollY < 1000) {
        image.src = 'mars.png';
        }
    else if (window.scrollY > 1000 && window.scrollY <= 2000){
        image.src = 'rick.jpg';
    }
});