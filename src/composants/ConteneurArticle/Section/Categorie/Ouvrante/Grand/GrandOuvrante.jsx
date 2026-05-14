import { useState } from 'react'
import GrandBaliseOuvrante_HTML from '../../../../../../assets/Balise-Ouvrante_HTML.png'
import './GrandOuvrante.css'

function GrandOuvrante() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*-- Grandes Balises Ouvrantes -- */}
    <div className="grand">

      <img id="grandouvrante" src={GrandBaliseOuvrante_HTML} alt="Grande Balise ouverte HTML" />
        
    </div>                  
      
    </>
  )
}

export default GrandOuvrante
