import React from 'react';
import css from './StockDashboard.css'
import StockTicker from '../StockTicker/StockTicker'

class StockDashboard extends React.Component {
	render () {
		return (
			<div className='stock-dashboard'>
				<StockTicker ticker='APPL'/>
				<StockTicker ticker='MSFT'/>
			</div>
		);
	}
}

export default StockDashboard;
