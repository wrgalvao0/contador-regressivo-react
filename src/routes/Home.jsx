import React, {useContext} from 'react'
import { DataContext } from '../context/DataContext'
import { Link } from 'react-router-dom'
import './Home.css'


const Home = () => {
  
  let { data, setData } = useContext(DataContext)

  function handleDateChange(event) {
    event.preventDefault()
    setData(event.target.value)
  }

  return (
    <div id='container-geral'>
      <div id='container-conteudo'>
        <h1>Monte sua contagem regressiva!</h1>
        <form>
          <label htmlFor="titulo">Titulo:</label>
          <input type="text" id='titulo' required placeholder='Digite o titulo do evento' />
          <label htmlFor="data">Data do evento:</label>
          <input type="date" id='data' placeholder='dd/mm/yyyy' value={data} onChange={handleDateChange} />
          <label htmlFor="imagem">Imagem:</label>
          <input type="url" id='imagem' placeholder='Digite a url da imagem' />
          <label htmlFor="cor-tema">Cor do tema:</label>
          <input type="color" id='cor-tema' />
          <Link to={'/contador'}>Enviar</Link>
        </form>
      </div>
    </div>
  )
}

export default Home