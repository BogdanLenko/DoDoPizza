import {useSelector} from 'react-redux';
import {FullCart} from './FullCart.jsx';
import {EmptyCart} from './EmptyCart.jsx';

export const Cart = () => {
	const cart = useSelector(state => state.cart.cart);
	return cart.length > 0 ? <FullCart/> : <EmptyCart/>;
};