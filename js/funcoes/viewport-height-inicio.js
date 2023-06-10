import debounce from './debounce.js';

export default function viewportHeightInicio() {
    const inicio = document.querySelector('[data-sessao="inicio"]');

    function viewportAjuste() {
        // Altura da viewport multiplicada por 1% para obter um valor para vh
        let vh = window.innerHeight * 0.01;

        // Configura o valor em --vh na raiz do documento
        inicio.style.setProperty('--vh', `${vh}px`);
    }

    const debouncedViewportAjuste = debounce(viewportAjuste, 200);

    window.addEventListener('resize', debouncedViewportAjuste);
    document.addEventListener('DOMContentLoaded', viewportAjuste);
};