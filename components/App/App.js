import React from 'react';
import css from './App.css'
import StockDashboard from '../StockDashboard/StockDashboard'

class App extends React.Component {
	render() {
		return (
			<div>
				<div className='app-header'>
					<div className='app-header-container'>
						<i className="app-header-menu-icon fa fa-bars fa-3x" aria-hidden="true"></i>
						<h1 className='app-header-title'>Stock Dashboard</h1>
					</div>
				</div>
				<StockDashboard />
			</div>
		);
	}
}

export default App;
