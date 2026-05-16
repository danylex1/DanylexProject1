import React from 'react'
import './Article.css'

function Article({article}) {
  return (
    <>

      <section id="article">

        <h2>{article}</h2>

        <p>Contenu de l'article...</p>
      
      </section>

    </>
  )
}

export default Article
