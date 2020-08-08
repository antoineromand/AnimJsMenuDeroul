const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navLinks = document.querySelectorAll('.nav-link li');
    //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //Anim Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //burger anim
        burger.classList.toggle('toggle');
    });

}

const app = () => {
    navSlide();
}
app();

