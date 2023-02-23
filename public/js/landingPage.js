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
        text: "My growth and discovery are greatly influenced  by Consuelo"
    },
    {
        id: 2,
        name: 'Grace Alojore',
        text: 'I loved using Consuelo, it helped me through my problems and now I’m healed',
    },
    {
        id: 3,
        name: 'Jane Brown',
        text: 'I struggle with anxiety, and reading tips has helped me manage my anxiety',
    },
    {
        id: 4,
        name: 'Phillips Karr',
        text: 'Consuelo has been an absolute game changer for my mental health journey',
    },
    {
        id: 5,
        name: 'Amaka Funke',
        text: 'I learnt a lot about myself and found a community to rely on.',
    },
    {   id: 6,
        name: 'Ade Eke',
        text: 'The community is like a safe space for me, and everyone in there are very supportive'
    },
    {   id: 7,
        name: 'Love Doe',
        text: "My favorite feature on consuelo is  the Mental Health Tips, which has provided valuable guidance for me in dealing with my Mental Health"
    },
    {   id: 8,
        name: 'Esther Parris',
        text: "Consuelo gave me clarity in my mental health struggles. It made such a major difference in my life that I couldn't help but speak up about it"
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
    // console.log(id);
    let testimonial = testimonialArr.find(testimony => testimony.id === id)
    target.classList.add('border-solid', 'border-4', 'border-white', 'rounded-full', 'scale-150')

    testimonialText.textContent = testimonial && testimonial.text
    testimonialName.textContent = testimonial && testimonial.name
})


featuresLink.addEventListener('click', e => {
    e.preventDefault()
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({
        behavior:'smooth'
    })
    if(!overlay.classList.contains('hidden')){
        hamburger.classList.toggle('hamburger-pos')
        lineOne.classList.toggle('line1-style')
        lineThree.classList.toggle('line3-style')
        lineTwo.classList.toggle('opacity-0')
        navbar.classList.toggle('screen')
        overlay.classList.toggle('hidden')
    }
})
