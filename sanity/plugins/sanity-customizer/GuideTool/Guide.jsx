import React from 'react';

import styles from './guideStyling.css';

export class Guide extends React.Component {
  state = {}

  render() {
    return (
      <div className={styles.container}>
        <h1>Guia para os módulos das páginas genéricas</h1>
        <p>O PDF abaixo cobre todos os módulos disponíveis para as páginas genéricas, qualquer dúvida entre em contato com o Henrique em <a href="mailto:henrique@kaordica.com.br">henrique@kaordica.com.br</a></p>
        <p><b>NOTA:</b> Você também pode baixar o PDF clicando <a href="/static/guia-cms.pdf" target="_blank">aqui</a> ;)</p>
        <object data="/static/guia-cms.pdf" type="application/pdf" width="100%" height="600px">
          <p><b>Erro</b>: Esse browser não suporta PDFs dentro desta página, baixe o guia clicando <a href="/static/guia-cms.pdf" target="_blank">aqui</a></p>
        </object>

      </div>
    )
  }
}

export default Guide;