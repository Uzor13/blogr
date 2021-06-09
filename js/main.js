const navMenu = document.querySelector(".mobile-nav");

function mobileMenu() {
    if (navMenu.classList.contains('active')) {
        navMenu.classList.toggle("active");
    } else  {
        navMenu.classList.toggle("active");
    }
}

const dropdown_arrow = document.querySelectorAll('.dropdown')
const dropdown = document.querySelectorAll('.mobile-nav--list__dropdown')


function dropdownMenu() {
    dropdown.forEach(n => n.classList.toggle('active'))
}

dropdown_arrow.forEach(n => n.addEventListener('click', dropdownMenu))
