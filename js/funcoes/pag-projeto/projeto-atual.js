export default function projetoAtual() {

    const linksInternos = document.querySelectorAll('[data-mobile-menu="lista"] a');

    function destacarProjetoAtual() {
        linksInternos.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add('destacarProjetoAtual');
            }
        });
    }

    function init() {
        destacarProjetoAtual();
    }

    init();
}