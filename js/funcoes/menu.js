export default function menu() {
    const iconeMenuMobile = document.querySelector('[data-mobile-menu="icone"]');
    const menuNav = document.querySelector('[data-mobile-menu="lista"]');
  
    function abrirFecharMenu() {
      iconeMenuMobile.classList.toggle('transformarIcone');
      menuNav.classList.toggle('mostrarItensMenu');
    }
  
    iconeMenuMobile.addEventListener('click', abrirFecharMenu);
  }