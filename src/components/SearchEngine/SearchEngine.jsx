import styles from './SearchEngine.module.sass';
import {useContext, useRef} from 'react';
import {SearchValueContext} from '../../App.jsx';

export const SearchEngine = () => {
	const inputRef = useRef();
	const {searchEngineValue, setSearchEngineValue} = useContext(SearchValueContext);
	return (
		<div className={styles.root}>
			<input
				ref={inputRef}
				value={searchEngineValue}
				onChange={e => setSearchEngineValue(e.target.value)}
				className={styles.input}
				placeholder={'Find pizza...'}
				type="text"/>
			<svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
			     strokeLinejoin="round"
			     strokeMiterlimit="1.414" clipRule="evenodd" viewBox="0 0 128 128"
			     id="search">
				<path fill="none" d="M.211 0h128v128h-128z"></path>
				<path fillRule="nonzero"
				      d="M75.941 79.528c-11.617 10.144-28.988 13.34-43.601 7.365C14.72 79.689 3.496 59.425 6.867 40.571 10.24 21.704 27.782 6.443 47.398 6.008c.361-.006.722-.008 1.084-.007 19.279.183 37.454 15.06 41.025 34.312 2.394 12.904-1.734 26.845-10.689 36.433l34.787 33.82c.746.788.617 1.05.605 1.489-.042 1.525-2.11 2.527-3.394 1.379L75.941 79.528ZM47.965 10.001c-17.208.163-33.355 13.173-36.934 30.111-2.634 12.469 1.515 26.166 10.639 35.073 10.478 10.228 27.063 13.662 40.897 8.005 16.003-6.542 26.182-25.034 23.007-42.148-3.147-16.967-18.86-30.64-36.627-31.035a53.632 53.632 0 0 0-.982-.006Z"></path>
			</svg>
			{searchEngineValue && <svg
				onClick={() => {
					setSearchEngineValue('');
					inputRef.current.focus();
				}}
				className={styles.closeIcon}
				xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
				viewBox="0 0 24 24" id="close">
				<path
					d="M19.8534546,19.1465454L12.7069092,12l7.1465454-7.1465454c0.1871948-0.1937256,0.1871948-0.5009155,0-0.6947021c-0.1918335-0.1986084-0.5083618-0.2041016-0.7069702-0.0122681l-7.1465454,7.1465454L4.8534546,4.1465454c-0.1937256-0.1871338-0.5009155-0.1871338-0.6947021,0C3.960144,4.3383789,3.9546509,4.6549072,4.1464844,4.8535156L11.2929688,12l-7.1464844,7.1464844c-0.09375,0.09375-0.1464233,0.2208862-0.1464233,0.3534546C4,19.776062,4.223877,19.999939,4.5,20c0.1326294,0.0001221,0.2598267-0.0526123,0.3534546-0.1465454l7.1464844-7.1464844l7.1465454,7.1465454C19.2401123,19.9474487,19.3673706,20.0001831,19.5,20c0.1325073-0.000061,0.2595825-0.0526733,0.3533325-0.1463623C20.048645,19.6583862,20.0487061,19.3417969,19.8534546,19.1465454z"></path>
			</svg>}
		</div>
	);
};