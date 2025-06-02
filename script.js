function mostrarMensagem(tipo) {
    const msgCampo = document.getElementById('msg-campo');
    const msgCidade = document.getElementById('msg-cidade');

    if (tipo === 'campo') {
        msgCampo.textContent = 
            "As festas do campo valorizam a ligação com a natureza, as tradições rurais e a fé. Elas promovem o fortalecimento da comunidade e preservam saberes antigos. Muitas dessas festas influenciam as festas urbanas, trazendo elementos folclóricos para a cultura da cidade.";
        msgCidade.textContent = "";
    } else if (tipo === 'cidade') {
        msgCidade.textContent = 
            "As festas da cidade são momentos de celebração da diversidade cultural e da convivência urbana. Elas reúnem pessoas de diferentes origens e refletem a modernidade sem perder a conexão com as tradições rurais, que muitas vezes são incorporadas em eventos culturais e artísticos.";
        msgCampo.textContent = "";
    }
}
