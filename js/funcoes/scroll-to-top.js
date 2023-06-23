export default function scrollToTop() {
    const logos = document.querySelectorAll('[data-scroll-to-top="logo"]');
    const eventos = ['touchstart', 'click'];

    function scrollTop(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    eventos.forEach((evento) => {
        logos.forEach(logo => {
            logo.addEventListener(evento, scrollTop);
        });
    });
}