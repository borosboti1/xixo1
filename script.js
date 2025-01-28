                                    //NAVBAR

const navbar = document.getElementsByClassName('navbar')[0];

window.onload = function() {
    navbar.style.top = '24px';
};

const hamburger = document.querySelector('.hamburger');
const hiddenNav = document.querySelector('.hiddenNav');

let toggleState = true;

hamburger.addEventListener('click', (event) => {
    event.stopPropagation(); // Megakadályozza, hogy a kattintás esemény továbbterjedjen a dokumentumra
    hamburger.classList.toggle('open');

    if (toggleState) {
        hiddenNav.classList.remove('close');
        hiddenNav.classList.add('open');
    } else {
        hiddenNav.classList.remove('open');
        hiddenNav.classList.add('close');
    }

    toggleState = !toggleState;
});

// Bezárás, ha a menün kívül kattintasz
document.addEventListener('click', (event) => {
    if (!hiddenNav.contains(event.target) && !hamburger.contains(event.target)) {
        if (hiddenNav.classList.contains('open')) {
            hiddenNav.classList.remove('open');
            hiddenNav.classList.add('close');
            hamburger.classList.remove('open');
            toggleState = true;
        }
    }
});