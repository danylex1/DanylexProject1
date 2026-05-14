// import { useState } from 'react'
import NomPrenom from './Nomprenom/Nomprenom'
import Metier from './Metier/Metier'
import './Entete.css'

function Entete() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section id="entete"> 

        <NomPrenom />

        <Metier />

      </section>

      
    </>
  )
}

export default Entete
