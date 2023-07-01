/*Pag Projeto*/
import projetoAtual from './funcoes/pag-projeto/projeto-atual.js';
import abrirFecharMenuProjeto from './funcoes/pag-projeto/abrir-fechar-menu-projeto.js';

/*Pag Portfólio*/
import scrollSuaveToContatos from './funcoes/pag-portfolio/scroll-suave-to-contatos.js';

/*Pag Principal*/
import scrollSuave from './funcoes/pag-principal/scroll-suave.js';
import slidePortfolio from './funcoes/pag-principal/slide-portfolio.js';
import scrollToTop from './funcoes/pag-principal/scroll-to-top.js';
import formasMenu from './funcoes/pag-principal/formas-menu.js';
import simboloInicio from './funcoes/pag-principal/simbolo-inicio.js';
import destacarItemMenu from './funcoes/pag-principal/destacar-item-menu.js';

/*Geral*/
import abrirFecharMenu from './funcoes/abrir-fechar-menu.js';

projetoAtual();
abrirFecharMenuProjeto();

scrollSuaveToContatos();

scrollSuave();
setTimeout(() => {
    destacarItemMenu();
    slidePortfolio();
}, 800);
scrollToTop();
formasMenu();
simboloInicio();

abrirFecharMenu();