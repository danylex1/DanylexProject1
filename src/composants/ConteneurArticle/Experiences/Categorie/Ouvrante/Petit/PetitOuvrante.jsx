import { useState } from 'react'
import PetitBaliseOuvrante_HTML from '../../../../../../assets/Balise-Ouvrante_HTML.png'
import './PetitOuvrante.css'

function PetitOuvrante() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*-- Petites Balises Ouvrantes -- */}

      <div className="petit">
            <img id="petitouvrante" src={PetitBaliseOuvrante_HTML} alt="Petit Balise ouverte HTML" /> 
      </div>               
        
    </>
  )
}

export default PetitOuvrante
