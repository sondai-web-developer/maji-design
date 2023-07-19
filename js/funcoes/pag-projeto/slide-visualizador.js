import debounce from "../debounce.js";

export default function slideVisualizador() {

    const imgsApresentacao = document.querySelectorAll('[data-apresentacao] li');
    const btnFechar = document.querySelector('[data-visualizador="btnFechar"]');
    const visualizador = document.querySelector('[data-visualizador="visualizador"]');
    const eventos = ['touchstart', 'click'];

    const wrapper = document.querySelector('[data-visualizador="wrapper"]');
    const lista = document.querySelector('[data-visualizador="lista"]');

    let distFinalPosition = 0;
    let distStartX = 0;
    let distMovement = 0;
    let distMovePosition = 0;

    let slideArray;
    let imgApresentacaoClicada;

    let slideIndex;

    let control;
    let controlArray;

    const changeEvent = new Event('changeEvent');

    const prevElement = document.querySelector('[data-visualizador="prev"]');
    const nextElement = document.querySelector('[data-visualizador="next"]');

    function transition(active) {
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

    function changeSlideOnEnd() {
        if (distMovement > 120 && slideIndex.next !== undefined) {
            activeNextSlide();
        } else if (distMovement < -120 && slideIndex.prev !== undefined) {
            activePrevSlide();
        } else {
            changeSlide(slideIndex.active);
        }
    }

    // Slide config

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

    function slidesIndexNav(index) {
        const last = slideArray.length - 1;

        slideIndex = {
            prev: index ? index - 1 : undefined,
            active: index,
            next: index === last ? undefined : index + 1,
        }
    }

    function changeSlide(index) {
        const activeSlide = slidesConfig()[index];
        moveSlide(activeSlide.position);
        slidesIndexNav(index);
        distFinalPosition = activeSlide.position;
        changeItemDestacado();
        wrapper.dispatchEvent(changeEvent);
    }

    function changeItemDestacado() {
        slidesConfig().forEach(item => {
            setTimeout(() => {
                item.element.style.opacity = '0';
            }, 270);
        });
        setTimeout(() => {
            slidesConfig()[slideIndex.active].element.style.opacity = '1';
        }, 270);
    }

    function activePrevSlide() {
        if (slideIndex.prev !== undefined) {
            changeSlide(slideIndex.prev);
        }
    }

    function activeNextSlide() {
        if (slideIndex.next !== undefined) {
            changeSlide(slideIndex.next);
        }
    }

    function onResize() {
        setTimeout(() => {
            slidesConfig();
            changeSlide(slideIndex.active);
        }, 200);
    }

    function addResizeEvents() {
        const debouncedOnResize = debounce(onResize, 200);

        window.addEventListener('resize', debouncedOnResize);
    }

    // Abrir e fechar visualizador

    function addSlidesIds() {
        imgsApresentacao.forEach((img, index) => {
            img.setAttribute('id', `${index}`);
        });
    }

    function abrirVisualizador(event) {
        visualizador.classList.add('exibirVisualizador');
        setTimeout(() => {
            lista.style.transition = '.3s';
            lista.style.opacity = '1';
        }, 300);
        imgApresentacaoClicada = +event.currentTarget.getAttribute('id');
        changeSlide(imgApresentacaoClicada);
        wrapper.addEventListener('mousedown', onStart);
        wrapper.addEventListener('mouseup', onEnd);
        wrapper.addEventListener('touchstart', onStart);
        wrapper.addEventListener('touchend', onEnd);
        addResizeEvents();
        addArrowEvent();
        addControl();
    }

    function fecharVisualizador() {
        visualizador.classList.remove('exibirVisualizador');
        removeControl();
        setTimeout(() => {
            lista.style.transition = '.3s';
            lista.style.opacity = '0';
        }, 300);
    }

    function fecharAltVisualizador(event) {
        if (event.target === this) {
            visualizador.classList.remove('exibirVisualizador');
            removeControl();
            setTimeout(() => {
                lista.style.transition = '.3s';
                lista.style.opacity = '0';
            }, 300);
        }
    }

    function addVisualizadorEvents() {
        eventos.forEach(evento => {
            imgsApresentacao.forEach(img => {
                img.addEventListener(evento, abrirVisualizador);
            });
            btnFechar.addEventListener(evento, fecharVisualizador);
            visualizador.addEventListener(evento, fecharAltVisualizador);
        });
    }

    // Navegação

    function addArrowEvent() {
        prevElement.addEventListener('click', activePrevSlide);
        nextElement.addEventListener('click', activeNextSlide);
    }

    // Paginação

    function createControl() {
        const control = document.createElement('ul');
        control.setAttribute('id', 'paginacao_visualizador');
        control.dataset.visualizador = 'paginacao';
        const slideArray = slidesConfig();

        slideArray.forEach((item, index) => {
            control.innerHTML += `<li><a href="#slide${index + 1}">${index + 1}</a></li>`;
        });
        wrapper.appendChild(control);

        return control;
    }

    function eventControl(item, index) {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            changeSlide(index);
        });
        wrapper.addEventListener('changeEvent', activeControlItem);
    }

    function activeControlItem() {
        controlArray.forEach(item => item.classList.remove('destacarPaginacao'));
        controlArray[slideIndex.active].classList.add('destacarPaginacao');
    }

    function addControl() {
        control = createControl();
        controlArray = [...control.children];
        activeControlItem();
        controlArray.forEach((item, index) => {
            eventControl(item, index);
        });
    }

    function removeControl() {
        control.remove();
    }

    function init() {
        if (imgsApresentacao && lista) {
            transition(true);
            addSlidesIds();
            addVisualizadorEvents();
            slidesConfig();
        }
    }

    init();
}