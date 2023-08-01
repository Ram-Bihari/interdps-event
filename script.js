const navbarBtn = document.querySelector('.toggleBtn')
const toggleButtonIcon = document.querySelector('.toggleBtn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

navbarBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
}