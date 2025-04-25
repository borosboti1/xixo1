/// jatekos mutato

const serverIP = "hypixel.net";
fetch(`https://api.mcsrvstat.us/2/${serverIP}`)
  .then((response) => response.json())
  .then((data) => {
    const playerCount = data.players ? data.players.online : 0;
    document.getElementById("playerCount").innerText = 
      `${playerCount} játékos`;
  })
  .catch((error) => {
    document.getElementById("playerCount").innerText = 
      "Nem sikerült lekérdezni a szerver állapotát.";
    console.error("Hiba", error);
  });


  
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

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 100;
    navbar.style.background = scrolled 
      ? 'linear-gradient(90deg, #000000ee, #1a1a1aee)' 
      : 'linear-gradient(90deg, #00000080, #1a1a1a80)';
    navbar.style.padding = scrolled ? '8px 0' : '12px 0';
  });

  window.addEventListener('scroll', function() {
    const background = document.querySelector('.HeaderBackground');
    if (window.scrollY > 100) {
        background.style.opacity = '0';
    } else {
        background.style.opacity = '1';
    }
});




document.querySelector('.lefele_nyil').addEventListener('click', () => {
    document.getElementById('section1').scrollIntoView({
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('section.teljeskep');
    const scrollY = window.scrollY;

    if (scrollY > header.clientHeight / 2) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});