import React from 'react'
import { Link } from 'react-router-dom';

import './Noticia.css'

function CardNoticia(props) {
  return (
    <div>
    <div id = "quadradoBranco">
        <Link id="link" to={props.idNoticia} className="title">
          <h2>{props.titulo}</h2>
        </Link> 
        
        <h1 id="titulos" className="descricao">{props.descricao}</h1>
   </div>
      <span className="date">{props.publishData}
      </span>



    </div>
  )
}

export default CardNoticia