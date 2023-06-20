import debounce from "./debounce.js";

export default function slidePortfolio() {
    const wrapper = document.querySelector('[data-slide="wrapper"]');
    const lista = document.querySelector('[data-slide="lista"]');

    let distFinalPosition = 0;
    let distStartX = 0;
    let distMovement = 0;
    let distMovePosition = 0;

    let slideArray;
    let slideIndex;

    const slideDestacado = 'slideDestacado';

    const prevElement = document.querySelector('[data-slide="prev"]');
    const nextElement = document.querySelector('[data-slide="next"]');

    let control;
    let controlArray;

    const changeEvent = new Event('changeEvent');

    function transition(active){
        lista.style.transition = active ? 'transform .3s' : '';
    }

    function moveSlide(distX) {
        distMovePosition = distX;
        lista.style.transform = `translate3d(${distX}px, 0, 0)`;
    }

    function updatePosition(clientX) {
        distMovement = (distStartX - clientX) * 1.6;
        return distFinalPosition - distMovement;
    }

    function onStart(event) {
        let movetype;

        if (event.type === 'mousedown') {
            event.preventDefault();
            distStartX = event.clientX;
            movetype = 'mousemove';
        } else {
            distStartX = event.changedTouches[0].clientX;
            movetype = 'touchmove';
        }
        wrapper.addEventListener(movetype, onMove);
        transition(false);
    }

    function onMove(event) {
        const pointerPosition = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;
        const finalPosition = updatePosition(pointerPosition);
        moveSlide(finalPosition);
    }

    function onEnd(event) {
        const movetype = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';
        wrapper.removeEventListener(movetype, onMove);
        distFinalPosition = distMovePosition;
        transition(true);
        changeSlideOnEnd();
    }

    function changeSlideOnEnd(){
        if(distMovement > 120 && slideIndex.next !== undefined){
            activeNextSlide();
        }else if(distMovement < -120 && slideIndex.prev !== undefined){
            activePrevSlide();
        }else {
            changeSlide(slideIndex.active);
        }
    }

    function addSlideEvents() {
        wrapper.addEventListener('mousedown', onStart);
        wrapper.addEventListener('mouseup', onEnd);
        wrapper.addEventListener('touchstart', onStart);
        wrapper.addEventListener('touchend', onEnd);
    }

    // Slide Config

    function slidePosition(lista) {
        const margin = (wrapper.offsetWidth - lista.offsetWidth) / 2;
        return -(lista.offsetLeft - margin);
    }

    function slidesConfig() {
        slideArray = [...lista.children].map((element) => {
            const position = slidePosition(element);

            return { position, element }
        });

        return slideArray;
    }

    function slidesIndexNav(index){
        const last = slideArray.length - 1;

        slideIndex = {
            prev: index ? index - 1 : undefined,
            active: index,
            next: index === last ? undefined : index + 1,
        }
    }

    function changeSlide(index){
        const activeSlide = slidesConfig()[index];
        moveSlide(activeSlide.position);
        slidesIndexNav(index);
        distFinalPosition = activeSlide.position;
        changeActiveClass();
        wrapper.dispatchEvent(changeEvent);
    }

    function changeActiveClass(){
        slidesConfig().forEach(item => {
            item.element.classList.remove(slideDestacado);
        });
        slidesConfig()[slideIndex.active].element.classList.add(slideDestacado);
    }

    function activePrevSlide(){
        if(slideIndex.prev !== undefined){
            changeSlide(slideIndex.prev);
        }
    }

    function activeNextSlide(){
        if(slideIndex.next !== undefined){
            changeSlide(slideIndex.next);
        }
    }

    function onResize(){
        setTimeout(() => {
            slidesConfig();
            changeSlide(slideIndex.active);
        }, 200);
    }

    function addResizeEvent(){
        const debouncedOnResize = debounce(onResize, 200);

        window.addEventListener('load', debouncedOnResize);
        window.addEventListener('resize', debouncedOnResize);
    }

    // Navegação

    function addArrowEvent(){
        prevElement.addEventListener('click', activePrevSlide);
        nextElement.addEventListener('click', activeNextSlide);
    }

    // Paginação

    function createControl(){
        const control = document.createElement('ul');
        control.dataset.control = 'slide';
        const slideArray = slidesConfig();

        slideArray.forEach((item, index) => {
            control.innerHTML += `<li><a href="#slide${index + 1}">${index + 1}</a></li>`;
        });

        wrapper.appendChild(control);

        return control;
    }

    function eventControl(item, index){
        item.addEventListener('click', (event) => {
            event.preventDefault();
            changeSlide(index);
        });
        wrapper.addEventListener('changeEvent', activeControlItem);
    }

    function activeControlItem(){
        controlArray.forEach(item => item.classList.remove('destacado'));
        controlArray[slideIndex.active].classList.add('destacado');
    }

    function addControl(customControl){
        control = document.querySelector(customControl) || createControl();
        controlArray = [...control.children];
        activeControlItem();
        controlArray.forEach((item, index) => {
            eventControl(item, index);
        });
    }

    function init() {
        transition(true);
        addSlideEvents();
        slidesConfig();
        addResizeEvent();
        changeSlide(1);
        addArrowEvent();
        addControl();
    }

    init();

}