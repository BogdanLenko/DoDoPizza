import {Link} from 'react-router-dom';


export const EmptyCart = () => {
	
	return (
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center'
		}}>
			<h1 style={{
				marginBottom: '10px',
				fontSize: '30px'
			}}>Your cart is now empty😕</h1>
			<p style={{
				marginBottom: '30px',
				fontSize: '17px'
			}}>Most likely, you haven't ordered pizza yet.
				To order pizza, go to the main page.</p>
			<img style={{
				width: '100%',
				maxWidth: '300px',
				marginBottom: '30px'
			}} src="/empty-cart.png" alt="Empty cart"/>
			<Link to="/">
				<button style={{
					backgroundColor: '#282828',
					width: '200px',
					height: '50px',
					borderRadius: '30px',
					cursor: 'pointer',
					color: 'white',
					fontSize: '16px',
					marginBottom: '30px'
				}}>return to main page
				</button>
			</Link>
		</div>
	);
};