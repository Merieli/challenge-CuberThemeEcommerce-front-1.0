
function effectScrollNav(){
    let lastScrollTop = 0;
    const navbar = document.querySelector('[data-nav]')
    window.addEventListener("scroll", function () {
        let scrollPosition = window.pageYOffset || document.documentElement.scrollPosition;
        if(scrollPosition > lastScrollTop){
            navbar.style.top="-96px";
        } else{
            navbar.style.top="0";
        }
        lastScrollTop = scrollPosition;
    })
}

function effectScrollParalax(){
    const section = document.getElementById('sectionFeatured');

    let heightMax = section.offsetHeight //Pega a altura da seção feature

    let heightView = document.documentElement.clientHeight

    const boxImg = document.querySelectorAll('[data-feature="img"]');

    const boxControl = document.querySelectorAll('[data-feature="controlheight"]')

    window.addEventListener('scroll', function () {
        const boxFixed = document.querySelectorAll('[data-feature="box"]');

        let value = window.pageYOffset;

        let imageHeightIncrease = value

        boxFixed.forEach(function(element){
            element.classList.add("activeScroll")//deixa o box da imagem fixa
        }); 
    

        //adiciona estilos necessários para efeito paralax:
        boxImg.forEach(function(element, i) {
            element.classList.add("resize");
            
            // element.parentElement.parentElement.style.zIndex = `${cont}`;
            // cont --
        })


        //TESTE PARA CONTROLE DE ALTURA:
        let cont = 2;
        for(let i in boxControl) {
            const heightToElem = boxControl[i].offsetHeight + value;
            if(value < heightToElem && value > boxControl[i].offsetHeight){
                // boxFixed.style.opacity = "0";
                boxControl[i].style.height = `${value}px`;

            }
        }

        // const pos1 = boxImg[2].offsetHeight;
        // if(pos1 > 0){
        //     boxImg[2].parentElement.style.height = `${value}px`;
        // }

        

        //remove classes que controlam o scroll Paralax
        if(value > (heightMax - heightView)) {
            boxFixed.forEach(element => element.classList.remove("activeScroll"));
            boxImg.forEach(element => element.classList.remove("resize"));

        }
        
    })
}

export const ScrollEffects = () => {
    effectScrollNav();
    effectScrollParalax();
}