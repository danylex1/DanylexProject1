// import { useState } from 'react'
import Competences from './Competences/Competences'
import Formations from './Formations/Formations'
import Experiences from './Experiences/Experiences'
import CentresDinterets from './CentresDinterets/CentresDinterets'
import Section from './Section/Section'
import './CategorieArticle.css'

function CategorieArticle() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section id="categoriearticle">

        <Competences titre="Compétences" article="Compétences" />

        <Formations titre="Formations" article="Formations" /> 

        <Experiences titre="Expériences" article="Expériences" />
          
        <CentresDinterets titre="Centres d'intérêts" article="Centres d'intérêts" />    
                  
      </section>

      
    </>
  )
}

export default CategorieArticle
