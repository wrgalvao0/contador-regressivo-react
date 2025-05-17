import React, {useContext} from 'react'
import { DataContext } from '../context/DataContext'
import { Link } from 'react-router-dom'
import './Home.css'


const Home = () => {
  
  let { data, setData, titulo, setTitulo } = useContext(DataContext)
  

  function handleDateChange(event) {
    
    setData(event.target.value)
  }
  function handleTituloChange(event) {

    setTitulo(event.target.value)
  }
  return (
    <div id='container-geral'>
      <div id='container-conteudo'>
        <h1>Monte sua contagem regressiva!</h1>
        <form>
          <label htmlFor="titulo">Titulo:</label>
          <input className='inputs' type="text" id='titulo' required placeholder='Digite o titulo do evento' value={titulo} onChange={handleTituloChange} />
          <label htmlFor="data">Data do evento:</label>
          <input className='inputs' type="date" id='data' placeholder='dd/mm/yyyy' value={data} onChange={handleDateChange} />
          <div id='container-botao'>
            <Link className='botao' to={'/contador'}>Enviar</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home