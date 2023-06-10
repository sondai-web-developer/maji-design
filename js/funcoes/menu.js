import clickOutside from "./clickoutside";

export default function menu() {
  const iconeMenuMobile = document.querySelector('[data-mobile-menu="icone"]');
  const menuNav = document.querySelector('[data-mobile-menu="lista"]');
  const eventos = ['touchstart', 'click'];

  function abrirFecharMenu(event) {
    event.preventDefault();
    this.classList.add('transformarIcone');
    menuNav.classList.add('mostrarItensMenu');
    clickOutside(menuNav, ['touchstart', 'click'], () => {
      this.classList.remove('transformarIcone');
      menuNav.classList.remove('mostrarItensMenu');
    });
  }

  eventos.forEach((evento) => {
    iconeMenuMobile.addEventListener(evento, abrirFecharMenu);
  });

}