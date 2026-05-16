import { useState } from 'react'
import Ouvrante from './Ouvrante/Ouvrante'
import Titrecategorie from './Titrecategorie/Titrecategorie'
import Fermant from './Fermant/Fermant'
import './reset.css'
import './Categorie.css'

function Categorie({titre}) {
  const [count, setCount] = useState(0)

  return (
    <>
    <section id="titrecategorie">

      <Ouvrante />

      <Titrecategorie titre={titre} />

      <Fermant />

    </section>
      
    </>
  )
}

export default Categorie

