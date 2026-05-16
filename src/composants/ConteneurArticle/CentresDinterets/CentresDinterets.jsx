// import { useState } from 'react'
import Categorie from './Categorie/Categorie'
import Article from './Article/Article'
import './Section.css'
import './CentresDinterets.css'

function CentresDinterets({titre, article}) {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section id="section">  
      
        <Categorie titre={titre} />
        
        <Article article={article} />

      </section>

      
    </>
  )
}

export default CentresDinterets
