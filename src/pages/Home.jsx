import {Categories, PizzaBlock, Skeleton, Sort} from '../components/index.js';
import {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {SearchValueContext} from '../App.jsx';
import {useSelector} from 'react-redux';
import {useActions} from '../hooks/useActions.js';
import qs from 'qs';
import {useNavigate} from 'react-router-dom';

export const Home = () => {
	
	const navigate = useNavigate();
	const sortBy = useSelector(state => state.filter.activeSort);
	const categoryId = useSelector(state => state.filter.categoryId);
	const {setCategoryId, setActiveCategory} = useActions();
	
	
	const {searchEngineValue} = useContext(SearchValueContext);
	const [pizzas, setPizzas] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [pizzaList, setPizzaList] = useState([]);
	const [searchTimeout, setSearchTimeout] = useState(null);
	
	const pizzasToRender = pizzaList.length > 0 ? pizzaList : pizzas;
	const skeletons = [...Array(10)].map((_, i) => <Skeleton key={i}/>);
	
	useEffect(() => {
		setIsLoading(true);
		//axios.get('https://6701044db52042b542d68706.mockapi.io/api/pizzas?search' + (categoryId !== 0) ? `&category=${categoryId}` : '' + `&sortBy=${sortBy}`)
		axios.get(`https://6701044db52042b542d68706.mockapi.io/api/pizzas?search${categoryId !== 0 ? `&category=${categoryId}` : ''}&sortBy=${sortBy.sortProperty}`)
			.then((response) => {
				setPizzas(response.data);
				setIsLoading(false);
			}).catch((error) => {
			console.log(error);
			setIsLoading(false);
		});
	}, [categoryId, sortBy]);
	useEffect(() => {
		if (window.location.search) {
			const query = qs.parse(window.location.search.substr(1));
			setCategoryId(Number(query.categoryId));
			setActiveCategory({name: query.sortBy, sortProperty: query.sortProperty});
		}
	}, []);
	useEffect(() => {
		const queryString = qs.stringify({
			sortProperty: sortBy.sortProperty,
			sortBy: sortBy.name,
			categoryId
		});
		console.log(queryString);
		navigate(`?${queryString}`);
	}, [sortBy, categoryId]);
	useEffect(() => {
		if (searchTimeout) {
			clearTimeout(searchTimeout);
		}
		const timeout = setTimeout(() => {
			const filteredPizzas = pizzas.filter(obj =>
				obj.title.toLowerCase().includes(searchEngineValue.toLowerCase())
			);
			setPizzaList(filteredPizzas);
		}, 500);
		setSearchTimeout(timeout);
		return () => clearTimeout(timeout);
	}, [searchEngineValue]);
	
	return (
		<>
			<div className="container">
				<div className="content__top">
					<Categories value={categoryId} categoryOnClick={(id) => setCategoryId(id)}/>
					<Sort/>
				</div>
				<h2 className="content__title">Все пиццы</h2>
				<div className="content__items">
					{isLoading ? skeletons : pizzasToRender.map((pizza) =>
						<PizzaBlock
							key={pizza.id}
							price={pizza.price}
							name={pizza.title}
							imageUrl={pizza.imageUrl}
							types={pizza.types}
							sizes={pizza.sizes}
							id={pizza.id}
						/>)
					}
				</div>
			</div>
		</>
	);
};