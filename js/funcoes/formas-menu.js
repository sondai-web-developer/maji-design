import debounce from './debounce.js';

export default function formasMenu() {
    const separador = document.querySelector('[data-separador-menu]');
    const logo = document.querySelector('[data-scroll-to-top="logo"]');
    const sessaoServico = document.querySelector('[data-sessao]');
    const menuNavUl = document.querySelector('[data-mobile-menu="lista"] ul');
    const linksInternos = document.querySelectorAll('[data-mobile-menu="lista"] a');

    function formas() {
        const sessaoServicoTopo = sessaoServico.getBoundingClientRect().top;
        if (sessaoServicoTopo <= 0) {
            separador.classList.add('mostrarElementosMenu');
            logo.classList.add('mostrarElementosMenu');
            if(window.innerWidth >= 628){
                menuNavUl.style.justifyContent = 'flex-end';
                linksInternos.forEach((link) => {
                    link.style.color = '#025959';
                    link.style.fontWeight = '600';
                });
            }
        } else {
            separador.classList.remove('mostrarElementosMenu');
            logo.classList.remove('mostrarElementosMenu');
            if(window.innerWidth >= 628){
                menuNavUl.style.justifyContent = 'center';
                linksInternos.forEach((link) => {
                    link.style.color = '#FFF9F1';
                    link.style.fontWeight = '400';
                });
            }
        }
    }

    const debouncedFormas = debounce(formas, 200);

    window.addEventListener('scroll', debouncedFormas);
    window.addEventListener('resize', debouncedFormas);
}