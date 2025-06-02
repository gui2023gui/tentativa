function mostrarMensagem(tipo) {
    const msgCampo = document.getElementById('msg-campo');
    const msgCidade = document.getElementById('msg-cidade');

    if (tipo === 'campo') {
        msgCampo.textContent = "As festas do campo são cheias de tradições rurais, música sertaneja e culinária típica, celebrando a natureza e a vida no interior.";
        msgCidade.textContent = "";
    } else if (tipo === 'cidade') {
        msgCidade.textContent = "As festas da cidade são vibrantes, com desfiles, shows e muita diversidade cultural, refletindo a vida urbana e suas expressões artísticas.";
        msgCampo.textContent = "";
    }
}
