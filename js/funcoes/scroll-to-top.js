export default function scrollToTop() {
    const logo = document.querySelector('[data-scroll-to-top="logo"]');
    const eventos = ['touchstart', 'click'];

    function scrollTop(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    eventos.forEach((evento) => {
        logo.addEventListener(evento, scrollTop);
    });
}