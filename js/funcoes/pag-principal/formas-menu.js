import debounce from '../debounce.js';

export default function formasMenu() {
    const separador = document.querySelector('[data-menu="separador"]');
    const logo = document.querySelector('[data-menu="logo"]');
    const sessaoServico = document.querySelector('[data-sessao]');
    const menuNavUl = document.querySelector('[data-menu="nav"] ul');
    const linksInternos = document.querySelectorAll('[data-menu="nav"] a');
    const menuPrincipal = document.querySelector('[data-menu="cabecalho"]');
    const eventos = ['scroll', 'resize'];
    const ativar = 'exibirSeparadorELogo';

    function formas() {
        const sessaoServicoTopo = sessaoServico.getBoundingClientRect().top;

        if (sessaoServicoTopo <= 0) {
            separador.classList.add(ativar);
            logo.classList.add(ativar);
        } else {
            separador.classList.remove(ativar);
            logo.classList.remove(ativar);
        }

        if (window.innerWidth >= 628 && sessaoServicoTopo <= 0) {
            menuNavUl.style.justifyContent = 'flex-end';
            linksInternos.forEach((link) => {
                link.style.color = '#025959';
                link.style.fontWeight = '600';
            });
        } else {
            menuNavUl.style.justifyContent = 'center';
            linksInternos.forEach((link) => {
                link.style.color = '#FFF9F1';
                link.style.fontWeight = '400';
            });
        }

        if(sessaoServicoTopo <= 0){
            menuPrincipal.style.background = '#FFF9F1';
        } else {
            menuPrincipal.style.background = 'transparent';
        }
    }

    function addWindowEvents() {
        const debouncedFormas = debounce(formas, 200);

        eventos.forEach(evento => {
            window.addEventListener(evento, debouncedFormas);
        });
    }

    function init() {
        if (sessaoServico && menuNavUl) {
            addWindowEvents();
        }
    }

    init();
}