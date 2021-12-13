import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Noticia from './routes/Noticia'
import NoticiaDestaque from './routes/NoticiaDestaque'
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className='grid-container'>
				<Routes>
					<Route path='/' element={<Noticia />} />
						<Route path=':idNoticia' element={<NoticiaDestaque />} />
				</Routes>
        
			</div>
		</BrowserRouter>

	);
}

export default App;