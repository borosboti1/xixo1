                                /// NAVBAR
const navbar = document.getElementsByClassName('navbar')[0];

window.onload = function() {
    navbar.style.top = '24px';
};

const hamburger = document.querySelector('.hamburger');
const hiddenNav = document.querySelector('.hiddenNav');

let toggleState = true;

hamburger.addEventListener('click', (event) => {
    event.stopPropagation();
    hamburger.classList.toggle('open');

    if (toggleState) {
        hiddenNav.classList.remove('close');
        hiddenNav.classList.add('open');
        hiddenNav.style.display = "flex";
    } else {
    }

    toggleState = !toggleState;
});

function closeMenu(event) {
    if (!hiddenNav.contains(event.target) && !hamburger.contains(event.target)) {
        if (hiddenNav.classList.contains('open')) {
            hiddenNav.classList.remove('open');
            hiddenNav.classList.add('close');
            setTimeout(() => hiddenNav.style.display = "none", 400)

            hamburger.classList.remove('open');
            toggleState = true;
        }
    }
}

document.addEventListener('click', closeMenu);
document.addEventListener('touchstart', closeMenu);
