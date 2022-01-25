// À changer : mettre le span sur le prix à modif et non le dollar

const price = document.querySelectorAll(".change");
const btnToggle = document.querySelector("#switch input");

btnToggle.addEventListener('click', () => {

    if (btnToggle.checked == true) {

        price[0].innerHTML = '199.99';
        price[1].innerHTML = '249.99';
        price[2].innerHTML = '399.99';

    } else {

        price[0].innerHTML = '19.99';
        price[1].innerHTML = '24.99';
        price[2].innerHTML = '39.99';
    }

})