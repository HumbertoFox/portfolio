const selectListAli = document.querySelectorAll('li a');
const selectCheckdBox = document.getElementById('menu-hamburguer');
const selectBtnTop = document.querySelector('.btn-top');

for (const iterator of selectListAli) {
    iterator.addEventListener('click', () => {
        selectCheckdBox.checked = false;
    });
};

document.onscroll = () => {
    btnOcultar();
}

function btnOcultar() {
    if(window.scrollY > 900){
        selectBtnTop.style.display = "flex";
    } else {
        selectBtnTop.style.display = "none";
    }
};