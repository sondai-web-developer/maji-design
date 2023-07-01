import debounce from '../debounce.js';

export default function destacarItemMenu() {
    const sessoes = document.querySelectorAll('[data-sessao]');
    const eventos = ['scroll', 'resize'];

    function infosSessoes() {
        const infosSessoesArray = [...sessoes].map((sessao) => {
            const sessaoHeight = sessao.offsetHeight;
            const sessaoOffsetTop = sessao.offsetTop;
            const sessaoId = sessao.getAttribute('id');
            const itemMenu = document.querySelector(`a[href="#${sessaoId}"]`);

            return { sessaoHeight, sessaoOffsetTop, sessaoId, itemMenu }
        });

        return infosSessoesArray;
    }

    function addDestacarItemEvents() {
        const debouncedDestacarItem = debounce(destacarItem, 200);

        eventos.forEach((evento) => {
            window.addEventListener(evento, debouncedDestacarItem);
        });

    }

    function destacarItem() {
        const scrollTop = document.documentElement.scrollTop;
        const infosSessoesArray = infosSessoes();
        infosSessoesArray.forEach((infosSessao => {
            if (infosSessao.sessaoOffsetTop - 1 <= scrollTop && infosSessao.sessaoOffsetTop - 1 + infosSessao.sessaoHeight >= scrollTop) {
                infosSessao.itemMenu.classList.add('destacar');
            } else {
                infosSessao.itemMenu.classList.remove('destacar');
            }
        }));
    }

    function init() {
        if(sessoes.length){
            addDestacarItemEvents();
        }
    }

    init();

}