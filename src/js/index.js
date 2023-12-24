const selectListAli = document.querySelectorAll('li a');
const selectCheckdBox = document.getElementById('menu-hamburguer');
const selectBtnTop = document.querySelector('.btn-top');
const selectAnimations = document.querySelectorAll("[data-animation]");

for (const iterator of selectListAli) {
    iterator.addEventListener('click', () => {
        selectCheckdBox.checked = false;
    });
};

function btnOcultar() {

    if (window.scrollY > 800) {
        selectBtnTop.classList.add('visivel-btn-top');
        setTimeout(() => {
            selectBtnTop.classList.remove('visivel-btn-top');
        }, 2000);
    } else {
        selectBtnTop.classList.remove('visivel-btn-top');
    };
};

const animatinScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * .50;

    selectAnimations.forEach((animation) => {
        (windowTop > animation.offsetTop) ? animation.classList.add("animation")
                                          : animation.classList.remove("animation");
    });
};

document.onscroll = () => {
    btnOcultar();
};

window.addEventListener("scroll", () => {
    animatinScroll();
});