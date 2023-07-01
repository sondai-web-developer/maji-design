export default function scrollSuave() {
    const linksInternos = document.querySelectorAll('[data-mobile-menu="lista"] a');
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

    function addLinksEvents(){
        eventos.forEach(evento => {
            linksInternos.forEach((link) => {
                link.addEventListener(evento, scrollToSection);
            });
        });
    }

    function init(){
        if(linksInternos.length){
            addLinksEvents();
        }
    }

    init();

}