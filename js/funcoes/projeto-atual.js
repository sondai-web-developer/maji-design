export default function projetoAtual() {

    const linksInternos = document.querySelectorAll('[data-menu-projeto="lista"] a');

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