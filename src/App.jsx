import './scss/app.scss';
import {Header} from './components/index.js';
import {Home} from './pages/Home.jsx';
import {NotFound} from './pages/NotFound.jsx';
import {Route, Routes} from 'react-router-dom';
import {createContext, useState} from 'react';
import {Cart} from './pages/Cart.jsx';

export const SearchValueContext = createContext('');

function App() {
	const [searchEngineValue, setSearchEngineValue] = useState('');
	return (
		<SearchValueContext.Provider value={{searchEngineValue, setSearchEngineValue}}>
			<>
				<div className="wrapper">
					<Header/>
					<div className="content">
						<Routes>
							<Route path="/" element={<Home/>}/>
							<Route path={'/cart'} element={<Cart/>}/>
							<Route path={'*'} element={<NotFound/>}/>
						</Routes>
					</div>
				</div>
			</>
		</SearchValueContext.Provider>
	);
}

export default App;