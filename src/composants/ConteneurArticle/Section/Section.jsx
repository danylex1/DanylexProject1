// import { useState } from 'react'
import Categorie from './Categorie/Categorie'
import Article from './Article/Article'
import './Section.css'

function Section() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section id="section">  
      
        <Categorie />
        
        <Article />

      </section>

      
    </>
  )
}

export default Section
