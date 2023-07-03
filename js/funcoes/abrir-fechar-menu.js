import clickOutside from "./clickoutside";

export default function abrirFecharMenu() {
  const iconeMenuMobile = document.querySelector('[data-menu="icone"]');
  const menuNav = document.querySelector('[data-menu="nav"]');
  const btnVoltar = document.querySelector('[data-menu="voltar"]');
  const eventos = ['touchstart', 'click'];

  function abrirFechar(event) {
    event.preventDefault();
    this.classList.add('transformarIcone');
    menuNav.classList.add('exibirNavMenu');
    if (btnVoltar) {
      btnVoltar.style.color = '#04BFBF';
    } if (btnVoltar && window.innerWidth >= 800){
      btnVoltar.style.color = '#025959';
    }
    clickOutside(menuNav, ['touchstart', 'click'], () => {
      this.classList.remove('transformarIcone');
      menuNav.classList.remove('exibirNavMenu');
      if (btnVoltar) {
        btnVoltar.style.color = '#025959';
      }
    });
  }

  function addIconEvents() {
    eventos.forEach((evento) => {
      iconeMenuMobile.addEventListener(evento, abrirFechar);
    });
  }

  function init() {
    if (iconeMenuMobile && menuNav) {
      addIconEvents();
    }
  }

  init();

}