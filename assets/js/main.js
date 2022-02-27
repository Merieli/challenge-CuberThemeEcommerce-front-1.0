import { SliderEffects } from "./modules/sliderEffect.js";
import { ScrollEffects } from "./modules/ScrollEffects.js";

const interactionSideMenu = () => {
    function sideModalOpenClose (buttonOpen, buttonClose, modal){
        const modalElem = modal;

        function visibilityModal (){
            modalElem.classList.toggle('active')
            const overlay = document.querySelector('[data-overlay]');
            const body = document.getElementsByTagName('body')[0];
            body.classList.toggle('bodySideBarMove')
            overlay.classList.toggle('sideOverlay--active')
            buttonClose.classList.toggle('sidemodal__closeMove')
            document.onclick = function(e){
                if( e.target.id !== 'sidemodal'){
                    console.log("Deu certo")
                }                  
            }
        }
        
        buttonOpen.addEventListener('click', visibilityModal);        
        buttonClose.addEventListener('click', visibilityModal); 

        // Arrumar Clique fora do sideMenu também fecha o modal
        document.onclick = function(e){
            if( e.target.id === 'sidemodal'){
                console.log("Deu certo")
            }                  
        }
       

    }

    const sideMenu = () => {
        const buttonSidebarOpen = document.querySelector('[data-sidebar="open"]');
        const buttonSidebarClose = document.querySelector('[data-sidebar="close"]'); 
        const sideBar = document.querySelector('[data-sidebar="menu"]');

        return sideModalOpenClose(buttonSidebarOpen, buttonSidebarClose, sideBar);
    }

    const sideCart = () => {
        const buttonSideCartOpen = document.querySelector('[data-sidecart="open"]');
        const buttonSideCartClose = document.querySelector('[data-sidecart="close"]'); 
        const sideCart = document.querySelector('[data-sidecart="menu"]');

        return sideModalOpenClose(buttonSideCartOpen, buttonSideCartClose, sideCart);
    }
 
    const sideSearch = () => {
        const buttonSideSearchOpen = document.querySelector('[data-sidesearch="open"]');
        const buttonSideSearchClose = document.querySelector('[data-sidesearch="close"]'); 
        const sideSearch = document.querySelector('[data-sidesearch="menu"]');

        return sideModalOpenClose(buttonSideSearchOpen, buttonSideSearchClose, sideSearch);
    }

    sideMenu()
    sideCart()
    sideSearch()
}


interactionSideMenu();
ScrollEffects();
SliderEffects();