const features = document.querySelectorAll('.features')
const featuresImg = document.querySelector('.features-img')
const featuresEl = document.querySelector('.features-container')
const testimonialEl = document.querySelector('.testimonial-container')
const testimonialAvi = document.querySelectorAll('.testimonial-profile')
const testimonialText = document.querySelector('.testimonial-text')
const testimonialName = document.querySelector('.testimonial-name')
const featuresLink = document.querySelector(".features__link")
const testimonialArr = [
    {
        id: 1,
        name: 'Hassy Eke',
        text: "I love the product and the design calmed my anxiety."
    },
    {
        id: 2,
        name: 'Grace Alojore',
        text: 'I loved using Consuelo, it helped me through my problems and now I’m healed',
    },
    {
        id: 5,
        name: 'Amaka Funke',
        text: 'I learnt a lot about myself and found a community to rely on.',
    },
    {   id: 6,
        name: 'Ade Eke',
        text:"I love lorem ipsum gan g sagare hasim telt opsum lorel ty, feran yera ipsum lorel fatam."
    }
    
]

featuresEl.addEventListener('click', e => {
    const target = e.target.closest('.features');

    if(!target) return;

    //check for and remove any elemnt with left sided border when clicked
    features.forEach(feature => {
        feature.classList.remove('border-primary-60')
        feature.classList.add('border-l-[transparent]')        
    })
    //add left sided border when clicked
    target.classList.add('border-primary-60')
    target.classList.remove('border-l-[transparent]')
    featuresImg.src = `/images/macbook-laptop-${target.dataset.img}.png`
})

testimonialEl.addEventListener('click', e => {
    const target = e.target.closest('.testimonial-profile')
    if(!target) return;

    testimonialAvi.forEach(avi => {
        avi.classList.remove('border-solid', 'border-4', 'border-white', 'rounded-full', 'scale-150')
    })

    let id = +target.dataset.id
    console.log(id);
    let testimonial = testimonialArr.find(testimony => testimony.id === id)
    target.classList.add('border-solid', 'border-4', 'border-white', 'rounded-full', 'scale-150')

    testimonialText.textContent = testimonial && testimonial.text
    testimonialName.textContent = testimonial && testimonial.name
})


featuresLink.addEventListener('click', e => {
    e.preventDefault()
    const id = e.target.getAttribute('href')
    // console.log(document.querySelector(id).getBoundingClientRect())
    // console.log(window.scrollY);

    document.querySelector(id).scrollIntoView({
        behavior:'smooth'
    })
})

