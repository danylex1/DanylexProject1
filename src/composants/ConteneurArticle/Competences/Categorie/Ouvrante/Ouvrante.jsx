// import { useState } from 'react'
import GrandOuvrante from './Grand/GrandOuvrante'
import PetitOuvrante from './Petit/PetitOuvrante'
import './Ouvrante.css'

function Ouvrante() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section id="ouvrante"> 

        <GrandOuvrante />

        <PetitOuvrante />    
                  
      </section>
      
    </>
  )
}

export default Ouvrante
