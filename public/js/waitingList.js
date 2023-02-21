const faqLink = document.querySelector('.faq__link')
const emailEl = document.querySelector('.email__form')
const emailInput = document.querySelector('.email__input')
const mailValidation =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const errorMsg = document.querySelector('.error-msg')
const successMsg = document.querySelector('.success-msg')
const faqEl = document.querySelector('.faq-container')
const faqQuestion = document.querySelectorAll('.faq-question')
const faqAnswer = document.querySelector('.faq-answer')
const accordionQuestion = document.querySelectorAll('.accordion-question')
const accordionAnswer = document.querySelectorAll('.accordion-answer')
const arrowEL = document.querySelectorAll('.arrow')
const modal = document.getElementById("modal")
const overlay = document.querySelector('.overlay')


faqLink.addEventListener('click', e => {
    e.preventDefault()
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    })
})

emailEl.addEventListener('submit', e => {
    // e.preventDefault()
    const email = emailInput.value
    errorMsg.classList.add('hidden')
    // successMsg.classList.add('hidden')
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
    if(!email.match(mailValidation) || email === ""){
        errorMsg.classList.remove('hidden')
        emailInput.value = ""
    }
    else{
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
        // successMsg.classList.remove('hidden')
    }
})

overlay.addEventListener('click', () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
    emailInput.value = ""
})

modal.addEventListener('click', e => {
    let target = e.target.closest('.close-modal')
    if(!target) return;
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
    emailInput.value = ""
})

faqEl.addEventListener('click', e => {
    const target = e.target.closest('.faq-question')
    if(!target) return;
    faqQuestion.forEach(question => {
        question.classList.remove('bg-primary-90', 'text-white')
    })
    target.classList.add('bg-primary-90', 'text-white')
    target.classList.remove('bg-stroke')
    const answer = target.lastElementChild.innerHTML
    faqAnswer.innerHTML = answer;
})


for(let i = 0; i < accordionQuestion.length; i++){
    accordionQuestion[i].addEventListener('click', e => {
        for(let j = 0; j < accordionAnswer.length; j++){
            if(i === j){
                accordionAnswer[j].classList.toggle('max-h-0')
                accordionAnswer[j].classList.toggle('max-h-72') //max-h is used because of transitioning
                arrowEL[j].classList.toggle('rotate-180')            
            }
            else{
                accordionAnswer[j].classList.add('max-h-0', 'overflow-hidden')
                accordionAnswer[j].classList.remove('max-h-72')
                arrowEL[j].classList.remove('rotate-180')
            }
        }
    })
}

