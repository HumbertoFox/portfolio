const selectListAli = document.querySelectorAll('li a');
const selectCheckdBox = document.getElementById('menu-hamburguer');

for (const iterator of selectListAli) {
    iterator.addEventListener('click', function(){
        selectCheckdBox.checked = false;
    });
};