import React, { useContext, useState, useEffect } from 'react'
import './Contador.css'
import { DataContext } from '../context/DataContext'

const Contador = () => {
  const [segundos, setSegundos] = useState(0)
  const [minutos, setMinutos] = useState(0)
  const [horas, setHoras] = useState(0)
  const [dias, setDias] = useState(0)
  const { data, titulo } = useContext(DataContext)

  useEffect(() => {
    if (!data) return

    const calcularTempo = () => {
      const agora = new Date()
      // Suporte para data no formato brasileiro DD/MM/YYYY
      let dataEvento
      if (data.includes('/')) {
        const [dia, mes, ano] = data.split('/')
        dataEvento = new Date(`${ano}-${mes}-${dia}`)
      } else {
        dataEvento = new Date(data)
      }

      const diffMs = dataEvento - agora

      if (diffMs <= 0) {
        setDias(0)
        setHoras(0)
        setMinutos(0)
        setSegundos(0)
        return
      }

      setSegundos(Math.floor(diffMs / 1000) % 60)
      setMinutos(Math.floor(diffMs / (1000 * 60)) % 60)
      setHoras(Math.floor(diffMs / (1000 * 60 * 60)) % 24)
      setDias(Math.floor(diffMs / (1000 * 60 * 60 * 24)))
    }

    calcularTempo()
    const timer = setInterval(calcularTempo, 1000)
    return () => clearInterval(timer)
  }, [data])
  console.log('TITULO NO CONTADOR', titulo)
  return (
    <div id='container-geral'>
      <div id='container-conteudo'>
        <h1 id='titulo-contador'>{titulo}</h1>
        <div id='container-contadores'>
          
            <div className='container-contador'>
              <span className='contador' readOnly>{dias}</span>
              <span className='legenda'>Dias</span>
            </div>
        
         
            <div className='container-contador'>
              <span className='contador' readOnly>{horas}</span>
              <span className='legenda'>Horas</span>
            </div>
       
        
            <div className='container-contador'>
              <span className='contador' readOnly>{minutos}</span>
              <span className='legenda'>Minutos</span>
            </div>
        
       
            <div className='container-contador'>
              <span className='contador' readOnly>{segundos}</span>
              <span className='legenda'>Segundos</span>
            </div>
       
        </div>
      </div>
    </div>
  )
}

export default Contador