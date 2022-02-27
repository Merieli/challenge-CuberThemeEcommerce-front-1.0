function sliderFeature(){
    const slides = document.querySelectorAll('[data-feature-slider="box"]');
    let i = 0;
    const next = document.querySelector('[data-feature-slider="next"]')
    const prev = document.querySelector('[data-feature-slider="prev"]')
    const index = document.querySelector('[data-feature-slider="index"]')

    next.addEventListener('click', function(){
        let ant = (i + 2) % slides.length;
        slides[ant].style.left = "100%"
        slides[ant].style.opacity = "0"
        slides[ant].style.visibility = "hidden"
        slides[i].classList.remove('featured__box--active');
        slides[i].style.opacity = "1"
        slides[i].style.visibility = "visible"
        slides[i].style.left = "-100%"
        i = (i + 1) % slides.length;
        slides[i].classList.add('featured__box--active')
        slides[i].style.opacity = "1"
        slides[i].style.visibility = "visible"
        slides[i].style.left = "0"

        index.innerHTML = i + 1;
    })

    prev.addEventListener('click', function(){
        let ant = (i - 2 + slides.length) % slides.length;
        slides[ant].style.left = "-100%"
        slides[ant].style.opacity = "0"
        slides[ant].style.visibility = "hidden"
        slides[i].classList.remove('featured__box--active');
        slides[i].style.opacity = "1"
        slides[i].style.visibility = "visible"
        slides[i].style.left = "100%"
        i = (i - 1 + slides.length) % slides.length;
        slides[i].classList.add('featured__box--active')
        slides[i].style.opacity = "1"
        slides[i].style.visibility = "visible"
        slides[i].style.left = "0"
        index.innerHTML = i + 1;
    })
}

function sliderLook(){
    const view = document.querySelector('[data-look-slider="viewport"]');
    const slides = document.querySelectorAll('[data-look-slider="box"]');
    let i = 0;
    const next = document.querySelector('[data-look-slider="next"]')
    const prev = document.querySelector('[data-look-slider="prev"]')
    const index = document.querySelector('[data-look-slider="index"]')


    function setTransform() {
    view.style.transform = `translateX(-${i * view.offsetWidth}px)`;
    console.log(view.offsetWidth)
    }

    next.addEventListener('click', function(){
        i = (i + 1) % slides.length;
        setTransform()
        index.innerHTML = i + 1;
    })

    prev.addEventListener('click', function(){
        i = (i - 1 + slides.length) % slides.length;
        setTransform()
        index.innerHTML = i + 1;
    })
}

export const SliderEffects = () => {
    sliderFeature()
    sliderLook()
}