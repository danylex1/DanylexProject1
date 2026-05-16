import { useState } from 'react'
import PetitBaliseFermant_HTML from '../../../../../../assets/Balise-Fermant_HTML.png'
import './PetitFermant.css'

function PetitFermant() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Petite Balise fermante HTML */}

      <div className="petit">

        <img id="petitfermant" src={PetitBaliseFermant_HTML} alt="Petit Balise fermée HTML" />

      </div>          
       
    </>
  )
}

export default PetitFermant
