const hamburger = document.querySelector('.hamburger-menu')
const lineOne = document.querySelector('.hamburger-menu_1')
const lineTwo = document.querySelector('.hamburger-menu_2')
const lineThree = document.querySelector('.hamburger-menu_3')
const navbar = document.querySelector('.navbar')
const overlay = document.querySelector('.overlay')

hamburger.addEventListener('click', (e) => {
    hamburger.classList.toggle('hamburger-pos')
    lineOne.classList.toggle('line1-style')
    lineThree.classList.toggle('line3-style')
    lineTwo.classList.toggle('opacity-0')
    navbar.classList.toggle('screen')
    overlay.classList.toggle('hidden')
})

overlay.addEventListener('click', e => {
    hamburger.classList.toggle('hamburger-pos')
    lineOne.classList.toggle('line1-style')
    lineThree.classList.toggle('line3-style')
    lineTwo.classList.toggle('opacity-0')
    navbar.classList.toggle('screen')
    overlay.classList.toggle('hidden')
})