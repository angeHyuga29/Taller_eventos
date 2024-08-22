document.addEventListener('DOMContentLoaded', function(event) {
    const unDiv = document.getElementById('unDiv');
    const button = document.querySelector('#unDiv button');

    
    unDiv.addEventListener('click', function(event) {
        alert('Hola! Soy el div');
    });

    button.addEventListener('click', function(event) {
        event.stopPropagation(); 
        alert('Hola!');
    });
});