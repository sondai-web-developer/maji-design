export default function scrollToTop() {
    const logos = document.querySelectorAll('[data-scroll-suave="logo"]');
    const eventos = ['touchstart', 'click'];

    function scrollTop(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    function addLogosEvents() {
        eventos.forEach((evento) => {
            logos.forEach(logo => {
                logo.addEventListener(evento, scrollTop);
            });
        });
    }

    function init() {
        if (logos.length) {
            addLogosEvents();
        }
    }

    init();

}