export default function scrollSuaveToContatos(){
    const itemContatos = document.querySelector('[data-menu-item="contatos"]');

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
                itemContatos.addEventListener(evento, scrollToSection);
        });
    }

    function init(){
        if(itemContatos){
            addLinksEvents();
        }
    }

    init();
}