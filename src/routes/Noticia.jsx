import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import CardNoticia from './CardNoticia'
import api from '../services/api'
import './Noticia.css'

function Noticia() {

	const [noticias, setNoticias] = useState([])

	useEffect(() => {
		api
			.get('/noticias')
			.then(response => {
				setNoticias(response.data)
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})
	}, [])

	return (
		<main>

			{
				noticias.map(noticia => {
					return (
						<div key={noticia._id}>
							<CardNoticia titulo={noticia.titulo} 
              autor={noticia.autor} 
              idNoticia={noticia._id} 
              publishData={noticia.data_publicacao} 
              descricao={noticia.descricao} />
						</div>
					)
				})
			}

		</main>
	)
}

export default Noticia