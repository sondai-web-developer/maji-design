import clickOutside from "./clickoutside";

export default function abrirFecharMenuProjeto() {
  const iconeMenuMobile = document.querySelector('[data-menu-projeto="icone"]');
  const menuNav = document.querySelector('[data-menu-projeto="lista"]');
  const btnVoltar = document.querySelector('[data-menu-projeto="voltar"]');
  const eventos = ['touchstart', 'click'];

  function abrirFechar(event) {
    event.preventDefault();
    this.classList.add('transformarIcone');
    menuNav.classList.add('mostrarItensMenu');
    btnVoltar.style.color = '#04BFBF';
    clickOutside(menuNav, ['touchstart', 'click'], () => {
      this.classList.remove('transformarIcone');
      menuNav.classList.remove('mostrarItensMenu');
      btnVoltar.style.color = '#025959';
    });
  }

  function addIconEvents(){
    eventos.forEach((evento) => {
      iconeMenuMobile.addEventListener(evento, abrirFechar);
    });
  }

  function init(){
    if(iconeMenuMobile && menuNav){
      addIconEvents();
    }
  }

  init();

}