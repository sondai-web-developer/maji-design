export default function mobileViewportInicio(){
    const inicio = document.getElementById('inicio');

    // Altura da viewport multiplicada por 1% para obter um valor para vh
    let vh = window.innerHeight * 0.01;
 
    // Configura o valor em --vh na raiz do documento
    inicio.style.setProperty('--vh', `${vh}px`);
};