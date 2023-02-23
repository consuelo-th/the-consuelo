const hamburger = document.querySelector('.hamburger-menu')
const lineOne = document.querySelector('.hamburger-menu_1')
const lineTwo = document.querySelector('.hamburger-menu_2')
const lineThree = document.querySelector('.hamburger-menu_3')
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')


hamburger.addEventListener('click', (e) => {
    hamburger.classList.toggle('fixed')
    lineOne.classList.toggle('line1-style')
    lineThree.classList.toggle('line3-style')
    lineTwo.classList.toggle('opacity-0')
    sidebar.classList.toggle('-translate-x-full')
    overlay.classList.toggle('hidden')

})

overlay.addEventListener('click', e => {
    hamburger.classList.toggle('fixed')
    lineOne.classList.toggle('line1-style')
    lineThree.classList.toggle('line3-style')
    lineTwo.classList.toggle('opacity-0')
    sidebar.classList.toggle('-translate-x-full')
    overlay.classList.toggle('hidden')
})