const features = document.querySelectorAll('.features')
const featuresImg = document.querySelector('.features-img')
const featuresContainer = document.querySelector('.features-container')


featuresContainer.addEventListener('click', e => {
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

