import {useDispatch} from 'react-redux';
import {useMemo} from 'react';
import {bindActionCreators} from '@reduxjs/toolkit';
import {actions as cardActions } from '../redux/cart.slice.js'
import { actions as filterActions } from '../redux/filter.slice.js'

export const useActions = () => {
	const rootActions = {
		...cardActions,
		...filterActions,
	}
	const dispatch = useDispatch()
	
	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}