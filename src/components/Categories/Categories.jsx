import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const Categories = ({categoryOnClick, value}) => {
	const [pizzaCategories, setPizzaCategories] = useState([]);
	useEffect(() => {
		axios.get('https://6701044db52042b542d68706.mockapi.io/api/categories').then((response) => setPizzaCategories(response.data));
	}, []);
	return (
		<div className="categories">
			<ul>
				{pizzaCategories.map((category, index) => (
					<li
						className={value === index ? 'active' : ''}
						onClick={() => categoryOnClick(index)}
						key={index}>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
}