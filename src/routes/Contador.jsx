import React from 'react'
import './Contador.css'
const Contador = ({titulo, dias, horas, minutos, segundos}) => {
  return (
    <div id='container-geral'>
        <div id='container-conteudo'>
            <h1>{titulo}</h1>
            <input className='inputs-contador' type="number" id='dias' defaultValue={dias}/>
            <input className='inputs-contador' type="number" id='horas' defaultValue={horas}/>
            <input className='inputs-contador' type="number" id='minutos' defaultValue={minutos}/>
            <input className='inputs-contador' type="number" id='segundos'defaultValue={segundos}/>
        </div>
    </div>
  )
}
export default Contador