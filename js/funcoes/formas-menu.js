import debounce from './debounce.js';

export default function formasMenu() {
    const separador = document.querySelector('[data-separador-menu]');
    const logo = document.querySelector('[data-scroll-to-top="logo"]');
    const sessaoServico = document.querySelector('[data-sessao]');
    const sessaoContatos = document.querySelector('[id="contatos"]');
    const menuNavUl = document.querySelector('[data-mobile-menu="lista"] ul');
    const linksInternos = document.querySelectorAll('[data-mobile-menu="lista"] a');
    const eventos = ['scroll', 'resize'];
    
    function formas() {
        const sessaoServicoTopo = sessaoServico.getBoundingClientRect().top;
        const scrollTop = document.documentElement.scrollTop;

        if (sessaoServicoTopo <= 0) {
            separador.classList.add('mostrarElementosMenu');
            logo.classList.add('mostrarElementosMenu');
        } else {
            separador.classList.remove('mostrarElementosMenu');
            logo.classList.remove('mostrarElementosMenu');
        }

        if(window.innerWidth >= 800 && sessaoServicoTopo <= 0){
            menuNavUl.style.justifyContent = 'flex-end';
            linksInternos.forEach((link) => {
                link.style.color = '#04BFBF';
                link.style.fontWeight = '600';
            });
        } else {
            menuNavUl.style.justifyContent = 'center';
            linksInternos.forEach((link) => {
                link.style.color = '#FFF9F1';
                link.style.fontWeight = '400';
            });
        }
    }

    const debouncedFormas = debounce(formas, 200);

    eventos.forEach(evento => {
        window.addEventListener(evento, debouncedFormas);
    });
}