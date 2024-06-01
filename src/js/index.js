const selectListAli = document.querySelectorAll('li a');
const selectCheckdBox = document.getElementById('menu-hamburguer');
const selectBtnTop = document.querySelector('.btn-top');
const selectHome = document.getElementById("home")
const selectSectionTitle = document.getElementById("title");
const selectAnimations = document.querySelectorAll("[data-animation]");

for (const iterator of selectListAli) {
    iterator.addEventListener('click', () => {
        selectCheckdBox.checked = false;
        selectHome.style.marginTop = '0';
    });
};

selectCheckdBox.addEventListener('change', () => {
    if (selectCheckdBox.checked === true) {
        selectHome.style.marginTop = '23rem';
    } else {
        selectHome.style.marginTop = '0';
    };
});

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
        (windowTop > animation.offsetTop) ? animation.classList.add('animation')
            : animation.classList.remove('animation');
    });
    (selectSectionTitle.classList.contains("animation") == true) ? selectHome.classList.remove('animation')
        : selectHome.classList.add('animation');
};

document.onscroll = () => {
    btnOcultar();
};

window.addEventListener('scroll', () => {
    animatinScroll();
});