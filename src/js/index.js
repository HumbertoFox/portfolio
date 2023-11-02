const selectMenuHamburg = document.querySelectorAll('li a');

selectMenuHamburg.forEach(function(itenli){
    itenli.addEventListener('click', function () {
        document.getElementById('menu-hamburguer').checked = false;
    })
})