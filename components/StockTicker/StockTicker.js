import React from 'react';
import css from './StockTicker.css';

class StockTicker extends React.Component {
	constructor (props) {
		super(props);
		this.state = {};
	}

	fetchStockPrice () {
		// TODO: API Call!
		return 100.00;
	}

	render () {
		return (
			<div className='stock-ticker'>
				<div className='stock-ticker-header'>
					<h3 className='stock-ticker-symbol'>{this.props.ticker}</h3>
					<h5 className='stock-ticker-price'>{parseFloat(this.state.tickerPrice)}</h5>
				</div>
				<div className='stock-ticker-key-values'>
					<h1>LOW: 100.00</h1>
					<h1>HIGH: 100.00</h1>
					<h1>MKT CAP: 100.00</h1>
				</div>	
			</div>
		);
	}
}

export default StockTicker;
