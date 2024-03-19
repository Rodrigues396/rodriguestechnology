// capturar o click no botao de cor

function bg(){
    console.log("clicou")
    let bg = document.querySelector('.containerHome')
    bg.style.background = "#000";
    bg.style.color = "#FFF"

    let bgPerfil = document.querySelector('.containerPerfil')
    bgPerfil.style.background = 'var(--cor04)';
}
