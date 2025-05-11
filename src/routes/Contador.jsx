import React, {useContext} from 'react'
import './Contador.css'
import { DataContext } from '../context/DataContext'
const Contador = ({titulo, dias, horas, minutos, segundos}) => {
  let {data} = useContext(DataContext)

  function tempoRestante() {
  const agora = new Date()
  const [dia, mes, ano] = data.split('/')
  const dataEvento = new Date(`${ano}-${mes}-${dia}`)

  const diffMs = dataEvento - agora

  if (diffMs <= 0) {
    return 'A data já passou!';
  }

  const segundos = Math.floor(diffMs / 1000) % 60;
  const minutos = Math.floor(diffMs / (1000 * 60)) % 60;
  const horas = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
  const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}
console.log(tempoRestante())

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