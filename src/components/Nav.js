import React from 'react';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';

const apiKey = "e38f1bc56d9486ca37e84667b7a98ba8";

const Nav = props => (

	<header className='nav-bar'>
		{(props.location.pathname.startsWith('/search'))
			? <SearchForm props={props} apiKey={apiKey} />
			: <br />}
		<ul>
			<li><Link to="/search/mountain">Mountain</Link></li>
			<li><Link to="/search/beach">Beaches</Link></li>
			<li><Link to="/search/bird">Birds</Link></li>
			<li><Link to="/search/food">Food</Link></li>
		</ul>
	</header>
);
export default Nav;