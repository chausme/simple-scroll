// set footer date

const dateEl = document.querySelector('footer .date');
dateEl.textContent = new Date().getFullYear();

// close links

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const navbar = document.querySelector('.nav-top');
const navHeightInitial = navbar.getBoundingClientRect().height;

navToggle.addEventListener('click', () => {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

// fixed nav

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    const topLink = document.querySelector('.top-link');

    if (scrollHeight > navHeight) {
        navbar.classList.add('nav-fixed');
    } else {
        navbar.classList.remove('nav-fixed');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});

// smooth scroll

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const anchor = e.currentTarget.getAttribute('href').slice(1);
        const sectionEl = document.getElementById(anchor);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const isNavFixed = navbar.classList.contains('nav-fixed');

        let position = sectionEl.offsetTop - navHeight;

        if (isNavFixed === false) {
            position -= navHeight;
        }

        // check if mobile nav is opened
        if (navHeight > navHeightInitial) {
            position += containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });

        // close mobile nav
        linksContainer.style.height = 0;
    });
});
