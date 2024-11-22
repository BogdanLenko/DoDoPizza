import {CartHeader, PizzaBlockCart} from '../components/index.js';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

export const FullCart = () => {
	
	const cart = useSelector(state => state.cart.cart);
	const price = cart.reduce((acc, item) => acc + item.price * item.amount, 0);
	const amount = cart.reduce((acc, item) => acc + item.amount, 0);
	console.log(cart);
	
	return <>
		<div className="wrapper">
			<div className="content">
				<div className="container container--cart">
					<div className="cart">
						<CartHeader/>
						<div className="content__items" style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							height: '100%',
							overflow: 'hidden',
							overflowY: 'auto',
							padding: '0 20px'
						}}>
							{cart.map((pizza, index) => <PizzaBlockCart params={pizza.params}
							                                            imageUrl={pizza.imageUrl}
							                                            amount={pizza.amount}
							                                            id={pizza.id}
							                                            price={pizza.price}
							                                            key={index}
							                                            name={pizza.name}/>)}
						
						</div>
						<div className="cart__bottom">
							<div className="cart__bottom-details">
								<span> Pizza's amount: <b>{amount}</b> </span>
								<span> Price of order: <b>{price} ₽</b> </span>
							</div>
							
							<div className="cart__bottom-buttons">
								<Link to={'/'}>
									<div className="button button--outline button--add go-back-btn">
										<svg width="8" height="14" viewBox="0 0 8 14" fill="none"
										     xmlns="http://www.w3.org/2000/svg">
											<path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3"
											      strokeWidth="1.5" strokeLinecap="round"
											      strokeLinejoin="round"/>
										</svg>
										<span>Come back</span>
									</div>
								</Link>
								<div className="button pay-btn">
									<span>Pay now</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>;
};