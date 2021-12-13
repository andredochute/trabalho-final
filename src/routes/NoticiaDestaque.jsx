import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import api from '../services/api'

import './Noticia.css'

function NoticiaDestaque(){
	let params = useParams()

	const [noticia, setNoticia] = useState([])

	useEffect(() => {
		api
			.get(`/noticias/visualizar?id=${params.idNoticia}`)
			.then(response => {
				setNoticia(response.data)
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})
	}, [])

	return (
		<article>
			 <div id="quadradoDestaque">
       <div id="content">
				<div>
					<span id="autor" className="author">{noticia.autor}</span>
          <div>
					<span id="data" className="date">{noticia.dataPublicacao}</span>
          </div>
				</div>
				<div className="title">
					<h2 id="titulo">{noticia.titulo}</h2>
          </div>
				</div>
			
			<div id="conteudo" className="text">
				{noticia.conteudo}
			</div>
      </div>
		</article>
	)
}

export default NoticiaDestaque