import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div id='container-geral'>
        <div id='container-conteudo'>
            <h1>Monte sua contagem regressiva!</h1>
            <form>
                <label htmlFor="titulo">Titulo:</label>
                <input type="text" id='titulo' required placeholder='Digite o titulo do evento' />
                <label htmlFor="data">Data do evento:</label>
                <input type="date" id='data' placeholder='dd/mm/' />
                <label htmlFor="imagem">Imagem:</label>
                <input type="url" id='imagem' placeholder='Digite a url da imagem'/>
                <label htmlFor="cor-tema">Cor do tema:</label>
                <input type="color" id='cor-tema' />
                <button>Criar</button>
            </form>
        </div>
    </div>
  )
}

export default Home