const selectListAli = document.querySelectorAll('li a');
const selectCheckdBox = document.getElementById('menu-hamburguer');

for (let i = 0; i < selectListAli.length; i++) {
    selectListAli[i].addEventListener('click', function(){
        selectCheckdBox.checked = false;
    });
};