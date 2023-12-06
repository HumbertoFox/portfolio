const selectListAli = document.querySelectorAll('li a');
const selectCheckdBox = document.getElementById('menu-hamburguer');
const selectBtnTop = document.querySelector('.btn-top');
const selectAnimations = document.querySelectorAll("[data-animation]");

for (const iterator of selectListAli) {
    iterator.addEventListener('click', () => {
        selectCheckdBox.checked = false;
    });
};

document.onscroll = () => btnOcultar();

function btnOcultar() {
    (window.scrollY > 900) ? selectBtnTop.classList.add('visivel-btn-top') 
                           : selectBtnTop.classList.remove('visivel-btn-top');
};

const animatinScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * .50;

    selectAnimations.forEach((animation) => {
        if (windowTop > animation.offsetTop) {
            animation.classList.add("animation");
        } else {
            animation.classList.remove("animation");
        };
    });
};

window.addEventListener("scroll", () => {
    animatinScroll();
});