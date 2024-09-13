const selectListAli = document.querySelectorAll("li a");
const selectCheckdBox = document.getElementById("menu-hamburguer");
const selectBtnTop = document.querySelector(".btn-top");
const selectHome = document.getElementById("home");
const selectSectionTitle = document.getElementById("title");
const selectAnimations = document.querySelectorAll("[data-animation]");
const selectInformactions = document.querySelectorAll(".informacoes p");
const selectHiddenElements = document.querySelectorAll('.informacoes.hidden');
const selectMoreButton = document.getElementById("loadMore");
let currentIndex = 0;

selectMoreButton.addEventListener('click', () => {
    for (let i = 0; i < 3; i++) {
        if (currentIndex < selectHiddenElements.length) {
            selectHiddenElements[currentIndex].classList.remove('hidden');
            currentIndex++;
        };
    };
    if (currentIndex >= selectHiddenElements.length) {
        selectMoreButton.style.display = 'none';
    };
});

function limitarTexto(elemento, limite) {
    const textoOriginal = elemento.textContent;
    if (textoOriginal.length > limite) {
        const textoLimitado = textoOriginal.substring(0, limite) + "...";
        elemento.textContent = textoLimitado;
    };
};

selectInformactions.forEach((paragrafo) => {
    limitarTexto(paragrafo, 66);
});

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