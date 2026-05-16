import { useState } from 'react'
import GrandBaliseFermant_HTML from '../../../../../../assets/Balise-Fermant_HTML.png'
import './GrandFermant.css'

function GrandFermant() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/* Grande Balise fermante HTML */}
    <div className="grand">

      <img id="grandfermant" src={GrandBaliseFermant_HTML} alt="Grande Balise fermée HTML" /> 
      
    </div>         
                        
    </>
  )
}

export default GrandFermant
