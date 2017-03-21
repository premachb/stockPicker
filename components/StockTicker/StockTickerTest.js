import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import StockTicker from './StockTicker';

describe('<StockTicker />', () => {
  it('renders StockTicker properly', () => {
  	const wrapper = shallow(<StockTicker ticker="APPL"/>);
  	expect(wrapper.containsMatchingElement(<div className="stock-ticker-header"></div>));
  });

  it('renders the ticker properly', () => {
  	const wrapper = shallow(<StockTicker ticker="APPL"/>);
  	expect(wrapper.containsMatchingElement(<h3 className='stock-ticker-symbol'>APPL</h3>));
  });

  it('calls fetches the stock price from the API once mounted', () => {
	  		
  });

});