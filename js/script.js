
const navbarContent = document.querySelector('.navbar_content')
const menu = document.querySelector('#menu_icon')
const inputSearch = document.querySelector('#input_search')
const homeContent = document.querySelector('.home_content')
const menuMobile = document.querySelector('#menu_mobile')

menu.addEventListener('click', () => {
    navbarContent.classList.toggle('active')
    homeContent.classList.toggle('active')
})

inputSearch.addEventListener('click', () => {
    navbarContent.classList.add('active')
    homeContent.classList.add('active')
})

menuMobile.addEventListener('click', () => {
    navbarContent.classList.toggle('active')
    homeContent.classList.toggle('active')
})