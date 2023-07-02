export default function scrollSuave() {
    const linksInternos = document.querySelectorAll('[data-scroll-suave="nav"] a');
    const eventos = ['touchstart', 'click'];

    function scrollToSection(event) {
        event.preventDefault();

        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;

        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });
    }

    function addLinksEvents() {
        eventos.forEach(evento => {
            linksInternos.forEach((link) => {
                if(link.getAttribute('href').startsWith('#')){
                    link.addEventListener(evento, scrollToSection);
                }
            });
        });
    }

    function init() {
        if (linksInternos.length) {
            addLinksEvents();
        }
    }

    init();

}