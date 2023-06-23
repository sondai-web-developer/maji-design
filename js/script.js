import destacarItemMenu from './funcoes/destacar-item-menu.js';
import scrollSuave from './funcoes/scroll-suave.js';
import slidePortfolio from './funcoes/slide-portfolio.js';
import scrollToTop from './funcoes/scroll-to-top.js';
import formasMenu from './funcoes/formas-menu.js';
import abrirFecharMenu from './funcoes/abrir-fechar-menu.js';
import simboloInicio from './funcoes/simbolo-inicio.js';

scrollSuave();

setTimeout(() => {
    destacarItemMenu();
    slidePortfolio();
}, 800);

scrollToTop();
formasMenu();
abrirFecharMenu();
simboloInicio();