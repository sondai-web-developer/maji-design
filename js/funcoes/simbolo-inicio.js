/*import debounce from './debounce.js';*/

export default function simboloInicio() {
  const simbolo = document.querySelector('[data-simbolo]');

  function mudarSimbolo() {
    if (window.innerWidth > 1000) {
      simbolo.setAttribute('src', 'imgs/imgs-pag-principal/inicio/desktop_simbolo_maji_inicio.svg');
    } else if (window.innerWidth > 550) {
      simbolo.setAttribute('src', 'imgs/imgs-pag-principal/inicio/tablet_simbolo_maji_inicio.svg');
    } else {
      simbolo.setAttribute('src', 'imgs/imgs-pag-principal/inicio/mobile_simbolo_maji_inicio.svg');
    }
  }

  const debouncedMudarSimbolo = debounce(mudarSimbolo, 200);

  /*window.addEventListener('resize', debouncedMudarSimbolo);*/
  document.addEventListener('DOMContentLoaded', mudarSimbolo);
}