import React from 'react';
import css from './StockTicker.css';

class StockTicker extends React.Component {
	constructor (props) {
		super(props);
		this.state = {tickerPrice: 105.53};
	}

	initiateWSConnection () {		
		// 1. Component makes WebSocket connection with Tiingo or w/e api
		// 2. Grab Market Data
		// 3. Listen on socket connection and update ticker price accordingly. 	
	}

	render () {
		return (
			<div className='stock-ticker'>
				<h3 className='stock-ticker-symbol'>{this.props.ticker}</h3>
				<h5 className='stock-ticker-price'>{parseFloat(this.state.tickerPrice)}</h5>
			</div>
		);
	}
}

export default StockTicker;
